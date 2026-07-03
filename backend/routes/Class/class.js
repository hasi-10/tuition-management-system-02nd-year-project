const express = require("express");
const router = express.Router();

const Class = require("../../models/Class/class");
const Teacher = require("../../models/Teacher/teacher");

// =========================
// CREATE CLASS
// =========================
router.post("/", async (req, res) => {
  try {
    console.log("BODY =", req.body);
    console.log("USER ID =", req.body.userId);

    const {
      userId,
      className,
      subject,
      grade,
      day,
      date,
      startTime,
      endTime,
      monthlyFee,
      mode,
      meetingLink,
    } = req.body;

    const teacher = await Teacher.findOne({
      userId: userId,
    });

    console.log("TEACHER =", teacher);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    const newClass = new Class({
      teacherId: teacher._id,
      className,
      subject,
      grade,
      day,
      date,
      startTime,
      endTime,
      monthlyFee,
      mode,
      meetingLink,
    });

    await newClass.save();

    res.status(201).json(newClass);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// GET CLASSES OF A TEACHER
// =========================
router.get("/teacher/:teacherId", async (req, res) => {
  try {
    const classes = await Class.find({
      teacherId: req.params.teacherId,
    });

    res.json(classes);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// UPDATE CLASS
// =========================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// DELETE CLASS
// =========================
router.delete("/:id", async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);

    res.json({
      message: "Class deleted successfully",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;