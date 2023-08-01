const region = require("../controllers/region.controller");
module.exports = app => {
    const region = require("../controllers/region.controller.js");

    var router = require("express").Router();

    router.get("/", region.findAll);

    app.use('/api/region', router);
};
