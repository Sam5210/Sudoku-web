const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (request, response) => {
    response.render("menu");
});
app.post("/game", (request, response) => {
    console.log(Object.keys(request.body));
    console.log("\n\n\n");
    response.send("<h1 class='h1 text-center mt-4'>Your response was sent !</h1>")
});
app.listen(3000);