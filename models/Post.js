const mongoose = require("mongoose");


const PostSchema = mongoose.Schema({
    key: String
});

module.exports = mongoose.model('Post', PostSchema);