const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const FoodEntrySchema = new Schema({
  foodData: Object,
  foodEater: String,
  date: Object
});

const FoodEntry = mongoose.model("FoodEntry", FoodEntrySchema);

module.exports = FoodEntry;
