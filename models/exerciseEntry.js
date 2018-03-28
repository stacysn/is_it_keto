const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const ExerciseEntrySchema = new Schema({
  exerciseData: Object
})

const ExerciseEntry = mongoose.model('ExerciseEntry', ExerciseEntrySchema);

module.exports = ExerciseEntry;