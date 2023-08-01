const sql = require("./db.js");

const Site = function (site) {
    this.label = site.label;
    this.description = site.description;
    this.image = site.image;
    this.video = site.video;
    this.idRegion = site.idRegion;
};

Site.create = (newSite, result) => {
    sql.query("INSERT INTO site SET ?", newSite, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("created newSite: ", {id: res.insertId, ...newSite});
        result(null, {id: res.insertId, ...newSite});
    });
};

Site.findById = (id, result) => {
    sql.query(`SELECT *
               FROM site
               WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found site: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Site.getAll = (result) => {
    let query = "SELECT * FROM site"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("site : ", res);
        result(null, res);
    });
};

Site.getByRegion = (idRegion,result) => {
    let query = `SELECT * FROM site where idRegion=${idRegion}`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("site : ", res);
        result(null, res);
    });
};

Site.search = (mot_cle,result) => {
    let query = `SELECT *
                    FROM site s
                    WHERE s.description LIKE '%${mot_cle}%'
                    or s.label LIKE '%${mot_cle}%'`
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("site : ", res);
        result(null, res);
    });
};


module.exports = Site;
