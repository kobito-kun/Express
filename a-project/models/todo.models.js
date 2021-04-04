const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    title : String,
    content : String,
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports.Todo = mongoose.model('Todo', Todo);