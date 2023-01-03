const Post = require('./model')

exports.createPost = async (req, res, next) => {
    if(!req.body?.name || !req.body?.topic){
        res
            .status(400)
            .json({message: `Name or Topic required`});
    }
    const createPost = await Post.create({ ...req.body });
    res
        .status(201)
        .json({message: `New post is created.`, data: createPost});
};