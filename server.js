"use strict";
//first we import our dependencies…
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Models
const User = require("./models/user");

//Controllers
const userController = require("./controllers/userController");

//and create our instances
var app = express();
var router = express.Router();

const mongoDB = "mongodb://keto:bacon5@ds215019.mlab.com:15019/is-it-keto";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var port = process.env.API_PORT || 3001;
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
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
  //and remove cacheing so we get the most recent comments
  res.setHeader("Cache-Control", "no-cache");
  next();
});
//now we can set the route path & initialize the API
router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

//user routes
router
  .route("/users")
  .get(userController.userGet)
  .post(userController.userSignUp);

//Use our router configuration when we call /api
app.use("/api", router);
//starts the server and listens for requests
app.listen(port, function() {
  console.log("api running on port " + port);
});
