const sql = require("./db.js");

// constructor
const Personne = function (personne) {
    this.nom = personne.nom;
};

Personne.getAll = (result) => {
    let query = "SELECT * FROM personne"
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("personne : ", res);
        result(null, res);
    });
};
//test modification git autre

module.exports = Personne;
