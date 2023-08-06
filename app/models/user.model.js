const sql = require("./db.js");

const User = function (user) {
    this.nom = user.nom;
    this.prenom = user.prenom;
    this.mail = user.mail;
    this.mdp = user.mdp;
    this.adresse = user.adresse;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        result(null, {id: res.insertId, ...newUser});
    });
};

User.findById = (id, result) => {
    sql.query(`SELECT *
               FROM user
               WHERE id = ${id}`, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

User.getAll = (result) => {
    let query = "SELECT * FROM user"
    sql.query(query, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
        result(null, res);
    });
};

User.login = (email,mdp, result) => {
    sql.query(`SELECT *
               FROM user
               WHERE mail = '${email}' and mdp = '${mdp}' `, (err, res) => {
        if (err) {
            result(err, null);
            return;
        }
        if (res.length) {
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};


module.exports = User;
