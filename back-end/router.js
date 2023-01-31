const router = require("express").Router();

const { createUser } = require("./users/controller");
const {
  createPost,
  getPost,
  getPosts,
  deletePost,
  updatePost,
} = require("./posts/controller");
const middleware = (req, res, next) => {
  console.log("sent request");
  next();
};

router.post("/user", createUser);
router
  .use(middleware)
  .get("/posts", getPosts)
  .get("/posts:id", getPost)
  .post("/posts", createPost)
  .patch("/posts:id", updatePost)
  .delete("/posts:id", deletePost);

module.exports = router;
