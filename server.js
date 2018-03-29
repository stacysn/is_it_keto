"use strict";
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Models
const User = require("./models/user");

//Controllers
const userController = require("./controllers/userController");

var app = express();
var router = express.Router();

//mLab
const mongoDB = "mongodb://keto:bacon5@ds215019.mlab.com:15019/is-it-keto";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var port = process.env.API_PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Cache-Control", "no-cache");
  next();
});

/* ROUTES */

//Initialize the API
router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

//user routes
router
  .route("/users")
  .get(userController.userGet)
  .post(userController.userSignUp);

app.use("/api", router);
app.listen(port, function() {
  console.log("api running on port " + port);
});
