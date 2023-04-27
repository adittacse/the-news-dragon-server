const express = require("express");
const app = express();
const cores = require("cors");
const port = 3000;

const categories = require("./data/categories.json");

app.use(cores());

app.get("/", (req, res) => {
    res.send("Dragon is running...");
});

app.get("/categories", (req, res) => {
    res.send(categories);
});

app.listen(port, () => {
    console.log(`Dragon API is running on port: ${port}`);
});