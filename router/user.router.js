const { Router } = require("express");
const router = new Router();
const controller = require("../controller/user.controller");

router.get("/login", [controller.validateUser]);

module.exports = router;
