const express = require("express");
const router = express.Router();
const {Todo} = require('./models/todo.models');

router.get("/", (req, res) => {
    Todo.find({}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
})

router.get("/:id", (req, res) => {
    var theTodo = Todo.find({ _id: req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result)
        }
    })
})

router.delete("/:id", (req, res) => {
    var id = req.params.id;
    Todo.deleteOne({ _id : id}, (err) => {
        if(err) res.json(err);
        console.log("Delete Complete.")
        res.send("Delete Complete");
    })
})

router.patch("/:id", async (req, res) => {
    var id = req.params.id;
    const updated = await Todo.updateOne({ _id : id}, {$set: {title: req.body.title, content: req.body.content, complete: req.body.complete}})
    res.json(updated)
})


router.put("/", (req, res) => {
    var title = req.body.title
    var content = req.body.content
    const newTodo = new Todo({
        title: title,
        content: content,
    });
    newTodo.save();
    res.json(newTodo)
})

module.exports = router