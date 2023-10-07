const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    title: {
        // types: String, Number, Boolean, Undefined, Null and RegExp
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;