const sql = require("./db.js");

const Event = function (event) {
    this.label = event.label;
};

Event.findById = (id, result) => {
    sql.query(`SELECT *
               FROM event
               WHERE id = ${id}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found event: ", res[0]);
            result(null, res[0]);
            return;
        }
        result({kind: "not_found"}, null);
    });
};

Event.getAll = (result) => {
    let query = "SELECT * FROM event where date_event > sysdate() "
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("event : ", res);
        result(null, res);
    });
};

Event.getTomorrowEvent = (result) => {
    let query = "SELECT * FROM event WHERE DATE(date_event) = DATE(DATE_ADD(NOW(), INTERVAL 1 DAY)); "
    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
        console.log("event : ", res);
        result(null, res);
    });
};

module.exports = Event;
