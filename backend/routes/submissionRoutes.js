const express = require("express");
const router = express.Router();

const Submission = require("../models/Submission");

// ================= SUBMIT QUIZ (ONE TIME ONLY) =================
router.post("/", async (req, res) => {
  try {

    const { quizId, studentEmail } = req.body;

    if (!quizId || !studentEmail) {
      return res.status(400).json({
        message: "Missing data",
      });
    }

    // CHECK IF ALREADY SUBMITTED
    const existing = await Submission.findOne({
      quizId,
      studentEmail,
    });

    if (existing) {
      return res.status(400).json({
        message: "Already attempted this quiz",
      });
    }

    const submission = await Submission.create(req.body);

    res.status(201).json({
      message: "Submitted successfully",
      submission,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

// ================= CHECK ATTEMPT =================
router.get("/check/:quizId/:email", async (req, res) => {
  try {

    const existing = await Submission.findOne({
      quizId: req.params.quizId,
      studentEmail: req.params.email,
    });

    res.json({
      attempted: !!existing,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;