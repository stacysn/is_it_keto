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
  entry.date = new Date();

  entry.save(function(err) {
    if (err) res.send(err);
    res.json({ message: "Entry successfully added!" });
  });
};

exports.allUserEntries = function(req, res) {
  FoodEntry.find({ foodEater: req.body.userId }, function(err, entries) {
    if (err) res.send({ error: "error" });
    const currentDate = new Date();
    const entriesThisWeek = [];

    for (j = 0; entries.length > j; j++) {
      for (let i = 0; 6 >= i; i++) {
        if (
          entries[j].date.getMonth() === currentDate.getMonth() &&
          entries[j].date.getDate() === currentDate.getDate() - i
        ) {
          entriesThisWeek.push(entries[j]);
        }
      }
    }

    User.findOne({ _id: req.body.userId }, function(err, user) {
      if (err) res.send({ error: "error" });
      res.send({ entries: entriesThisWeek, user: user.userName });
    });
  });
};
