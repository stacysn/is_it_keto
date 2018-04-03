const FoodEntry = require("../models/foodEntry.js");
const User = require("../models/user.js")

//for testing only
exports.entryGet = function(req, res) {
  FoodEntry.find(function(err, entries) {
    if (err) res.send(err);
    res.json(entries);
  });
};

exports.newEntry = function(req, res) {
  let entry = new FoodEntry();
  entry.foodData = req.body;

  const userId = req.body.userId;
  User.findOne({_id: userId}, function(err, user){
    entry.foodEater = user;
  })

  entry.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "Entry successfully added!" });
  });
};