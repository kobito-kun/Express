const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv/config")
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true},  () => console.log("DB Connected."))

const todos = require('./todos');

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use('/todos', todos);


app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})