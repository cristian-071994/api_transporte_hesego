const { Router } = require("express");
const { registerUser } = require("./users.controller")

const router = Router();

router.route("/users").post(registerUser);

module.exports = router;
