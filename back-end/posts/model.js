const { model, Schema } = require("mongoose");

const PostScheme = new Schema({
    publisher: String,
    topic: String,
    info: String,
    image: String,
});

const PostModel = model("Post", PostScheme);

module.exports = PostModel  