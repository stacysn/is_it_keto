const bcrypt = require("bcrypt");
const User = require("../models/user.js");

exports.userGet = function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
};

exports.userSignUp = function(req, res) {
  let user = new User();
  user.userName = req.body.userName;
  user.password = bcrypt.hashSync(req.body.password, 10);
  user.name = req.body.name;
  user.weight = req.body.weight;
  user.memberSince = Date.now();
  user.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "User successfully added!" });
  });
};

exports.userLogin = function(req, res) {
  User.findOne({ userName: req.body.userName }, function(err, user) {
    if (bcrypt.compareSync(req.body.password, user.password)){
      res.json(user);
    } else {
      res.send({ message: "Login Fail" });
    }
  });
};
