const user = require("../controllers/user.controller");
module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();


    router.get("/", user.findAll);
    router.post("/signin", user.create);
    router.post("/auth", user.login);

    app.use('/api/user', router);
};
