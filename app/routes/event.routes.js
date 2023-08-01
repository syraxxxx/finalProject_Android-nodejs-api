const event = require("../controllers/event.controller");
module.exports = app => {
    const event = require("../controllers/event.controller.js");

    var router = require("express").Router();

    router.get("/", event.findAll);
    router.get("/ev/:id", event.findOne);
    router.get("/tomorrow", event.findEventTomorrow);


    app.use('/api/event', router);
};
