const express = require('express');
const bodyparser = require('body-parser');

const sampledata = require('./sample.json')

const app = express();
const port = 8000;

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get("/", (req, res) => {
    res.send("Henlo")
})

app.get("/todos/", (req, res) => {
    res.json(sampledata)
})

app.get("/todo/:id", (req, res) => {
    var filtered = sampledata.filter(e => e.id == req.params.id)
    res.json(filtered)
})

app.put("/todo/", (req, res) => {

    // Add todo here

    res.send("Item successfully saved.");
})

app.listen(port, () => {
    console.log(`Listenning at port ${port}`)
})