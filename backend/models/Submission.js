const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  quizId: {
    type: String,
    required: true
  },

  studentEmail: {
    type: String,
    required: true   // 🔥 ADD THIS
  },

  studentName: String,
  teacher: String,
  subject: String,
  grade: String,

  answers: Array,
  score: Number
});

module.exports = mongoose.model("Submission", submissionSchema);