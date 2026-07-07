const express = require("express");
const router = express.Router();

const Class = require("../../models/Class/class");
const Teacher = require("../../models/Teacher/teacher");

// =========================
// AUTO GENERATE GOOGLE MEET LINK
// =========================
const generateMeetLink = () => {
  const chars = "abcdefghijklmnopqrstuvwxyz";

  const part1 = Array.from({ length: 3 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");

  const part2 = Array.from({ length: 4 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");

  const part3 = Array.from({ length: 3 }, () =>
    chars[Math.floor(Math.random() * chars.length)]
  ).join("");

  return `https://meet.google.com/${part1}-${part2}-${part3}`;
};

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

    // ✅ CREATE CLASS WITH AUTO GENERATED LINK
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

      // 🔥 AUTO GENERATED GOOGLE MEET LINK
      meetingLink: generateMeetLink(),
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