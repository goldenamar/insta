const router = require("express").Router();

const { createPost, getPost, getPosts, deletePost, updatePost } = require("./controller");
const middleware = (req, res, next) => {
    console.log('hi');
    next();
}

router
    .use(middleware)
    .get('/posts', getPosts)
    .get('/posts/:id', getPost)
    .post('/posts', createPost)
    .patch('/posts/:id', updatePost)
    .delete('/posts/:id', deletePost)

module.exports = router;