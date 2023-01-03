const router = require("express").Router();

const { createPost } = require("./controller");

router.post("/", createPost);

module.exports = router;