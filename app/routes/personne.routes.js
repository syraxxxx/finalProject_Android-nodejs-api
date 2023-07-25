const personne = require("../controllers/personne.controller");
module.exports = app => {
    const personne = require("../controllers/personne.controller.js");

    var router = require("express").Router();


    // Retrieve all Tutorials
    router.get("/", personne.findAll);

    app.use('/api/personne', router);
};
