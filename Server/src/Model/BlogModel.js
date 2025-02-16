const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    blogTitle: {type:String},
    blogDes: {type:String},
    blogContent: {type:String},
    img:{type:String},
}, {timestamps: true, versionKey: false})

const BlogModel = mongoose.model("Blogs", BlogSchema)

module.exports = BlogModel;
