const Region = require("../models/region.model.js");

exports.findAll = (req, res) => {
    Region.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving ."
            });
        else res.send(data);
    });
};

