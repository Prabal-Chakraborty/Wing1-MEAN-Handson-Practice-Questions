const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name:       { type: String, required: true },
  rollNo:     { type: String, required: true },
  grade:      { type: String, required: true },
  percentage: { type: Number, required: true }
});

module.exports = mongoose.model('student', studentSchema);
