const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const FoodEntrySchema = new Schema({
  foodData: Object,
  foodEater: String,
  date: Number
});

const FoodEntry = mongoose.model("FoodEntry", FoodEntrySchema);

module.exports = FoodEntry;
