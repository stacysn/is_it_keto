const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const FoodEntrySchema = new Schema({
  foodData: Object,
  foodEater: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const FoodEntry = mongoose.model("FoodEntry", FoodEntrySchema);

module.exports = FoodEntry;
