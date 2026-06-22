const express = require("express");
const router = express.Router();

const Submission = require("../models/Submission");


// SAVE SUBMISSION
router.post("/", async (req, res) => {
  try {

    const submission = new Submission(
      req.body
    );

    await submission.save();

    res.status(201).json({
      message: "Submission saved",
      submission,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Failed to save submission",
    });

  }
});


// GET SUBMISSIONS FOR ONE QUIZ
router.get("/:quizId", async (req, res) => {
  try {

    const submissions =
      await Submission.find({
        quizId: req.params.quizId,
      });

    res.json(submissions);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Failed to fetch submissions",
    });

  }
});

router.get(
  "/details/:id",
  async (req, res) => {

    try {

      const submission =
        await Submission.findById(
          req.params.id
        );

      res.json(submission);

    } catch (err) {

      console.log(err);

      res.status(500).json({
        message: "Server Error",
      });

    }

  }
);

module.exports = router;