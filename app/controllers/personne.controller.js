const Personne = require("../models/personne.model.js");

// Create and Save a new Tutorial


// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
    Personne.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

