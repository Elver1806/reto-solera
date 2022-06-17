const { Router } = require("express");
const router = new Router();

const routerUser = require("./user.router");

router.use("/user", routerUser);

module.exports = router;
