const router = require("express").Router();

const { createUser } = require("./controller");

router.post("/", createUser);

module.exports = router;