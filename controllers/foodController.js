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
    let dataChart = [];

    for (i = 0; 9 >= i; i++) {
      for (j = 0; entries.length > j; j++) {
        if (
          entries[j].date.getFullYear() === currentDate.getFullYear() &&
          entries[j].date.getMonth() === currentDate.getMonth() &&
          entries[j].date.getDate() === currentDate.getDate() - i
        ) {
          if (dataChart[i] === undefined) {
            dataChart.push({
              date: `${currentDate.getMonth()}/${currentDate.getDate() - i}`,
              value:
                parseInt(entries[j].foodData.netCarbs) -
                parseInt(entries[j].foodData.dietaryFiber)
            });
          } else {
            dataChart[i].value += parseInt(
              entries[j].foodData.netCarbs - entries[j].foodData.dietaryFiber
            );
          }
          entriesThisWeek.push(entries[j]);
        } else if (dataChart[i] === undefined) {
          dataChart.push({
            date: `${currentDate.getMonth()}/${currentDate.getDate() - i}`,
            value: null
          });
        }
      }
    }

    User.findOne({ _id: req.body.userId }, function(err, user) {
      if (err) res.send({ error: "error" });
      res.send({
        entries: entriesThisWeek,
        user: user.userName,
        dataChart: dataChart
      });
    });
  });
};
