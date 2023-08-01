const Site = require("../models/Site.model.js");

exports.findAll = (req, res) => {
    Site.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};

exports.getByRegion = (req, res) => {
    Site.getByRegion(req.params.id, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};

exports.search = (req, res) => {
    Site.search(req.body.search,(err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};
