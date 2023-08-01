const site = require("../controllers/site.controller");
const event = require("../controllers/event.controller");
module.exports = app => {
    const site = require("../controllers/site.controller.js");

    var router = require("express").Router();

    router.get("/", site.findAll);
    router.get("/byregion/:id", site.getByRegion);
    router.post("/search", site.search);
    // router.get("/published", site.findAllPublished);
    // router.get("/:id", site.findOne);
    // router.put("/:id", site.update);
    // router.delete("/:id", site.delete);
    // router.delete("/", site.deleteAll);

    app.use('/api/site', router);
};
