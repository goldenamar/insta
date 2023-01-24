const Post = require('./model')

exports.createPost = async (req, res, next) => {
    if(!req.body?.publisher || !req.body?.topic){
        res
            .status(400)
            .json({message: `Publisher or Topic required`});
    }
    const createPost = await Post.create({ ...req.body });
    res
        .status(201)
        .json({message: `New post is created.`, data: createPost});
};

exports.getPosts = async ( req ,res, next) => {
    const posts = await Post.find({})
    res.status(200).json(posts)
}

exports.getPost = async ( req, res, next) => {
    const {id} = req.query.starts;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post)
    } catch (err){
        res.status(400).json(err)
    }
}

exports.updatePost = async ( req, res, next) => {

}

exports.deletePost = async ( req, res, next) => {

}