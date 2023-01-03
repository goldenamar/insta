const { model, Schema } = require("mongoose");

const PostScheme = new Schema({
    name : String,
    topic: String,
    image: String,
    publisher: String
});

const PostModel = model("Post", PostScheme);

module.exports = PostModel