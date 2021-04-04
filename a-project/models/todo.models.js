const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    title : String,
    content : String,
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: String,
        required: true,
    },
    complete: {
        type: Boolean,
        default: false,
    },
});

module.exports.Todo = mongoose.model('Todo', Todo);