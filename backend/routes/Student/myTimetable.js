const express = require("express");
const router = express.Router();

const {
  getStudentTimetable,
} = require("../../controllers/StudentTimetableController");

// ==========================================
// GET STUDENT TIMETABLE
// ==========================================
router.get("/:email", getStudentTimetable);

module.exports = router;