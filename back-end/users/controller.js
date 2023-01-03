const User = require('./model')

exports.createUser = async (req, res, next) => {
    if(!req.body?.firstname || !req.body?.lastname){
        res
            .status(400)
            .json({message: `Firstname or lastname required`});
    }
    const createUser = await User.create({ ...req.body });
    res
        .status(201)
        .json({message: `New user is created.`, data: createUser});
};