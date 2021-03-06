const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: String,
  password: String,
  name: String,
  weight: Number,
  height: Object,
  memberSince: Object,
  optimalCalorieIntake: Number
  // foodEntry: {
  //   type: Schema.Types.ObjectId,
  //   ref: "FoodEntry"
  // }
  // exerciseEntry: {
  //   type: Schema.Types.ObjectId,
  //   ref: "ExerciseEntry"
  // }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
