const User = require("../models/user.model.js");

exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving tutorials."
            });
        else res.send(data);
    });
};

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }

    // Create a user
    console.log(req.body)
    const user = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        mail: req.body.mail,
        mdp: req.body.mdp,
        adresse: req.body.adresse
    });

    // Save user in the database
    User.create(user, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the User."
            });
        else res.send(data);
    });
};

exports.login = (req, res) => {
    User.login(req.body.mail,req.body.password, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Identifiant ou mot de passe incorrect`
                });
            } else {
                res.status(500).send({
                    message: "Internal Server Error " + req.params.id
                });
            }
        } else res.send(data);
    });
};

