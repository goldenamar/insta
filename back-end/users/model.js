const { model, Schema } = require("mongoose");

const UserScheme = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    registerdate: {type: Date, default: Date.now},
});

const UserModel = model("User", UserScheme);

module.exports = UserModel