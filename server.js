//server.js
'use strict'

//first we import our dependencies…
const express = require('express');
const bodyParser = require('body-parser');
const User = require('./models/user');
const mongoose = require('mongoose');
const mongoDB = "mongodb://keto:bacon5@ds215019.mlab.com:15019/is-it-keto";
mongoose.connect(mongoDB,{ useMongoClient: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//and create our instances
const app = express();
const router = express.Router();
//set our port to either a predetermined port number if you have set
//it up, or 3001
const port = process.env.PORT || 3001;

//body-parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
//require models
// const db = require("./models");

//db config
// mongoose.connect('mongodb://keto:bacon5@ds215019.mlab.com:15019/is-it-keto')
//now we should configure the API to use bodyParser and look for
//JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now we can set the route path & initialize the API
router.get('/', function(req,res) {
  res.json({message: 'API Initialized!'});
});

router.route('/users')
  .get(function(req, res){
    User.find(function(err, users){
      if (err) res.send(err);
      res.json(users)
    });
  }) 
  .post(function(req, res) {
    let user = new User();
    user.name = "Stacy";

    user.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'User successfully added!' });
    });
    
  })
//Use our router configuration when we call /api
app.use('/api', router);
//starts the server and listens for requests
app.listen(port, function() {
 console.log(`api running on port ${port}`);
});
