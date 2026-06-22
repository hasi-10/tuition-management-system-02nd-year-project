const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz");

// CREATE QUIZ
router.post("/", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);

    await quiz.save();

    res.status(201).json({
      message: "Quiz created successfully",
      quiz,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed to create quiz",
    });
  }
});

// GET ALL QUIZZES
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find().sort({
      createdAt: -1,
    });

    res.json(quizzes);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Failed to fetch quizzes",
    });
  }
});
router.get(
  "/course/:subject/:grade/:teacher",
  async (req, res) => {
    try {

      const quiz = await Quiz.findOne({
        subject: req.params.subject,
        grade: req.params.grade,
        teacher: req.params.teacher,
      }).sort({
        createdAt: -1,
      });

      res.json(quiz);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }
  }
);

// GET SINGLE QUIZ
router.get("/:id", async (req, res) => {
  try {

    const quiz = await Quiz.findById(
      req.params.id
    );

    if (!quiz) {
      return res.status(404).json({
        message: "Quiz not found"
      });
    }

    res.json(quiz);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });

  }
});

// UPDATE QUIZ
router.put("/:id", async (req, res) => {

  try {

    const updatedQuiz =
      await Quiz.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true
        }
      );

    res.json(updatedQuiz);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Update Failed"
    });

  }

});

// DELETE QUIZ
router.delete("/:id", async (req, res) => {
  try {

    await Quiz.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Quiz deleted successfully"
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Delete Failed"
    });

  }
});
module.exports = router;