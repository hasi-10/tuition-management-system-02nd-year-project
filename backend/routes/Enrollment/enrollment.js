const express = require("express");
const router = express.Router();

const Enrollment = require("../../models/Enrollment/enrollment");

// Get all enrollments of a student
router.get("/:email", async (req, res) => {
  try {

    const enrollments = await Enrollment.find({
      studentEmail: req.params.email,
    });

    res.json(enrollments);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: err.message,
    });

  }
});

module.exports = router;