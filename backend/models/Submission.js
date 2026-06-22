const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true,
  },

  quizId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
    required: true,
  },

  answers: [
    {
      question: String,
      selectedAnswer: String,
      correctAnswer: String,
    },
  ],

  score: {
    type: Number,
    default: 0,
  },

  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(
  "Submission",
  submissionSchema
);