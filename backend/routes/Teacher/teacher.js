const express = require("express");
const router = express.Router();
const Teacher = require("../../models/Teacher/teacher");

// =========================
// GET ALL TEACHERS
// =========================
router.get("/", async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});




// =========================
// GET TEACHER BY EMAIL
// =========================
router.get("/email/:email", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({
      email: req.params.email,
    });

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    res.json(teacher);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});





// =========================
// GET TEACHER BY USER ID
// =========================
router.get("/user/:userId", async (req, res) => {
  try {
    const teacher = await Teacher.findOne({
      userId: req.params.userId,
    });

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    res.json(teacher);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});




// =========================
// GET TEACHERS BY GRADE
// =========================
router.get("/grade/:grade", async (req, res) => {
  try {

    const teachers = await Teacher.find({
      grades: req.params.grade,
    });

    res.json(teachers);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
});




// =========================
// GET ONE TEACHER
// =========================
router.get("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    res.json(teacher);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// =========================
// UPDATE TEACHER
// =========================
router.put("/:id", async (req, res) => {
  try {
    const teacher = await Teacher.findById(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    teacher.name = req.body.name;
    teacher.email = req.body.email;
    teacher.phone = req.body.phone;
    teacher.subject = req.body.subject;
    teacher.bio = req.body.bio;
    teacher.grades = req.body.grades;
    teacher.schedule = req.body.schedule;

    await teacher.save();

    res.json(teacher);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;

// =========================
// DELETE TEACHER
// =========================
router.delete("/:id", async (req, res) => {
  try {

    const teacher = await Teacher.findByIdAndDelete(req.params.id);

    if (!teacher) {
      return res.status(404).json({
        message: "Teacher not found",
      });
    }

    res.json({
      success: true,
      message: "Teacher deleted successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: err.message,
    });
  }
});