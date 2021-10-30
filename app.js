const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (request, response) => {
    response.sendFile(__dirname + "/home.html");
});
app.listen(3000);