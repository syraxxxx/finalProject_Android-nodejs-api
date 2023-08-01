const sql = require("./db.js");

const Region = function (region) {
    this.label = region.label;
};

Region.findById = (id, result) => {
    sql.query(`SELECT *
               FROM region
               WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found region: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Region.getAll = (result) => {
    let query = "SELECT * FROM region"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("region : ", res);
        result(null, res);
    });
};


module.exports = Region;
