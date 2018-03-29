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
  user.name = req.body.name;
  user.weight = req.body.weight;
  user.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "User successfully added!" });
  });
};
