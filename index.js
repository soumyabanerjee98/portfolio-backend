const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const projects = require('./routes/projects');

const app = express();

dotenv.config();
mongoose
.connect(process.env.URLKEY)
.then(() => console.log("Database Connected"))
.catch((err) => console.log("e*--",err));

app.get("/",(req,res) => {
    res.send("Home");
})
app.use(express.json());
app.use("/projects", projects);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running");
});