const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  phone: String,

  dob: String,
  nic: String,
  address: String,

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