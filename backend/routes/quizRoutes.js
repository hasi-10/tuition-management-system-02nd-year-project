const express = require("express");
const router = express.Router();

const Quiz = require("../models/Quiz");
const Enrollment = require("../models/Enrollment/enrollment");

// ================= GET QUIZ USING ENROLLMENT =================
router.get("/student/:enrollmentId/:email", async (req, res) => {
  try {
    const { enrollmentId, email } = req.params;

    // Find enrollment
    const enrollment = await Enrollment.findById(enrollmentId);

    if (!enrollment) {
      return res.json(null);
    }

    // Security check
    if (enrollment.studentEmail !== email) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    // Find quiz using enrollment details
    const quiz = await Quiz.findOne({
      teacher: enrollment.teacher,
      subject: enrollment.subject.trim(),
      grade: enrollment.grade.trim(),
      status: "Active",
    }).sort({
      createdAt: -1,
    });

    if (!quiz) {
      return res.json(null);
    }

    res.json(quiz);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// ================= CREATE QUIZ =================
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz({
      ...req.body,
      subject: req.body.subject?.trim(),
      grade: req.body.grade?.trim(),
      status: "Active",
    });

    await quiz.save();

    res.status(201).json({
      message: "Quiz created successfully",
      quiz,
    });

  } catch (err) {
    console.log("========== CREATE QUIZ ERROR ==========");
    console.log(err);

    res.status(500).json({
      message: err.message,
      error: err,
    });
  }
});

// ================= GET QUIZ FOR COURSE =================
router.get("/course/:subject/:grade/:teacher", async (req, res) => {
  try {
    const subject = req.params.subject.trim();
    const grade = req.params.grade.trim();
    const teacher = req.params.teacher;

    const quiz = await Quiz.findOne({
      teacher,
      subject,
      grade,
      status: "Active",
    }).sort({
      createdAt: -1,
    });

    res.json(quiz);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// ================= GET QUIZ FOR STUDENT (LEGACY FILTER) =================
router.get("/filter/:subject/:grade/:teacherId/:email", async (req, res) => {
  try {
    const subject = req.params.subject.trim();
    const grade = req.params.grade.trim();
    const teacherId = req.params.teacherId;
    const email = req.params.email;

    // Check enrollment
    const enrolled = await Enrollment.findOne({
      studentEmail: email,
      subject,
      grade,
      status: "Active",
    });

    if (!enrolled) {
      return res.json(null);
    }

    // Get quiz
    const quiz = await Quiz.findOne({
      subject,
      grade,
      teacher: teacherId,
      status: "Active",
    });

    return res.json(quiz);

  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: err.message,
    });
  }
});

// ================= GET QUIZZES OF TEACHER =================
router.get("/teacher/:teacherId", async (req, res) => {
  try {
    const quizzes = await Quiz.find({
      teacher: req.params.teacherId,
    }).sort({
      createdAt: -1,
    });

    res.json(quizzes);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed to fetch teacher quizzes",
    });
  }
});

// ================= GET QUIZ BY ID =================
router.get("/:id", async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found",
      });
    }

    res.json(quiz);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;