const Event = require("../models/Event.model.js");

exports.findAll = (req, res) => {
    Event.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};

exports.findOne = (req, res) => {
    Event.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Event with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Event with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

exports.findEventTomorrow = (req, res) => {
    Event.getTomorrowEvent((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};

