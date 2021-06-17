const express = require("express");
const app = express();

const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

const PORT = 3000;

app.use(cors());

app.use(urlencodedParser);

app.get("/", (req, res) => {
    res.send("home");
});

app.get("/products", (req, res) => {
    let data = "";
    fs.readFile("data.json", (err, fileData) => {
        if (err) throw err;
        data = JSON.parse(fileData);
        console.log("data sent");
        res.json(data.products);
    });
});

app.get("/users", (req, res) => {
    let data = "";
    fs.readFile("data.json", (err, fileData) => {
        if (err) throw err;
        data = JSON.parse(fileData);
        console.log("data sent");
        res.json(data.users);
    });
});

app.post("/signup", jsonParser, (req, res) => {
    console.log("receiving data ...");
    console.log("body is ", req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log("server started");
});
