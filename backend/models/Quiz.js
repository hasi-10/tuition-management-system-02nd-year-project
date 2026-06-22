const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  optionA: String,
  optionB: String,
  optionC: String,
  optionD: String,
  correctAnswer: String,
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  subject: {
    type: String,
    required: true,
  },

  teacher: {
  type: String,
},

  grade: {
    type: String,
  },

  duration: {
    type: Number,
  },

  dueDate: {
    type: Date,
  },

  questions: [questionSchema],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);