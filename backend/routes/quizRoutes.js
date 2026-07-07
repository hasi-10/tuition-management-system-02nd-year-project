const express = require("express");
const router = express.Router();

const Quiz = require("../models/Quiz");
const Enrollment = require("../models/Enrollment/enrollment");

// ================= CREATE QUIZ =================
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz({
      ...req.body,
      subject: req.body.subject?.trim(),
      grade: req.body.grade?.trim(),
    });

    await quiz.save();

    res.status(201).json({
      message: "Quiz created successfully",
      quiz,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to create quiz" });
  }
});

// ================= FILTER QUIZ (MAIN FIX) =================
router.get("/filter/:subject/:grade/:teacher/:email", async (req, res) => {
  try {

    const subject = (req.params.subject || "").trim();
    const grade = (req.params.grade || "").trim();
    const teacher = req.params.teacher;
    const email = req.params.email;

    // STEP 1: CHECK ENROLLMENT
    const enrolled = await Enrollment.findOne({
      studentEmail: email,
      subject,
      grade,
      teacher,
      status: "Active",
    });

    if (!enrolled) {
      return res.json(null);
    }

    // STEP 2: GET QUIZ
    const quiz = await Quiz.findOne({
      subject,
      grade,
      teacher,
      status: "Active",
    });

    return res.json(quiz);

  } catch (err) {
    console.log("FILTER ERROR:", err);
    return res.status(500).json({ message: err.message });
  }
});

// ================= GET TEACHER QUIZZES =================
router.get("/teacher/:teacherId", async (req, res) => {
  try {

    const quizzes = await Quiz.find({
      teacher: req.params.teacherId,
    }).sort({ createdAt: -1 });

    res.json(quizzes);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to fetch teacher quizzes" });
  }
});

// ================= GET BY ID =================
router.get("/:id", async (req, res) => {
  try {

    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.json(quiz);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;