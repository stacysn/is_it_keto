const FoodEntry = require("../models/foodEntry.js");
const User = require("../models/user.js");

//for testing only
exports.entryGet = function(req, res) {
  FoodEntry.find(function(err, entries) {
    if (err) res.send(err);
    res.json(entries);
  });
};

exports.newEntry = function(req, res) {
  let entry = new FoodEntry();
  entry.foodData = req.body.foodData;
  entry.foodEater = req.body.foodEater;
  entry.date = Date.now();

  entry.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "Entry successfully added!" });
  });
};

exports.allUserEntries = function(req, res) {
  FoodEntry.find({foodEater: req.body.userId}, function(err, entries) {
    if (err) res.send({ error: "error" });
    res.send({ entries: entries });
  });
};
