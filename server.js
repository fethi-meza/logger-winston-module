const express = require("express");
const logger = require('./services/logger.services');
const Logger = new logger("controller (phath) ")

const app = express();
const port = 3000;

app.use(express());

app.get("/", (req, res) => {
    res.send("hi how are u");
});

app.listen(port, () => {
    console.log(`all is good in this conecting in this ${port}`);
});
