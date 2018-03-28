var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json(asdfasdf));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const people = [
  {},
  {
    name: "kyle",
    age: 34
  },
  {
    name: "shannon",
    age: 23
  }
];

app.get("/", (req, res) => {});

app.get("/people", (req, res) => {
  res.json(people);
});

app.listen(PORT, () => {
  console.log("we out here");
});
