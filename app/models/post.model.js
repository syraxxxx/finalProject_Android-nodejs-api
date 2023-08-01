const sql = require("./db.js");

const Post = function (post) {
    this.description = post.description;
    this.image = post.image | 'image_url';
    this.video = post.video | "video_url";
    this.date_post = post.date_post;
    this.idUser = post.idUser;
};

Post.create = (newPost, result) => {
    sql.query("INSERT INTO post SET ?", newPost, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created newPost: ", {id: res.insertId, ...newPost});
        result(null, {id: res.insertId, ...newPost});
    });
};

Post.findById = (id, result) => {
    sql.query(`SELECT *
               FROM post
               WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found post: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Post.getAll = (result) => {
    let query = "SELECT * FROM post order by date_post desc"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("post : ", res);
        result(null, res);
    });
};


module.exports = Post;
