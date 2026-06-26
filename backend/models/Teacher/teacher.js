const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  bio: String,
  grades: [String],

  schedule: [
    {
      day: String,
      time: String,
      grade: String,
      fee: Number,
    },
  ],
});

module.exports = mongoose.model("teacher", teacherSchema);