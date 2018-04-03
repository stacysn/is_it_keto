const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const FoodEntrySchema = new Schema({
  foodData: String
})

const FoodEntry = mongoose.model('FoodEntry', FoodEntrySchema);

module.exports = FoodEntry;