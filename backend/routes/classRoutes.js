const express = require("express");
const router = express.Router();
const Class = require("../models/Class");

// ==========================
// CREATE CLASS
// ==========================
router.post("/", async (req, res) => {
  try {
    const newClass = new Class(req.body);

    await newClass.save();

    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// GET ALL CLASSES OF A TEACHER
// ==========================
router.get("/teacher/:teacherId", async (req, res) => {
  try {
    const classes = await Class.find({
      teacherId: req.params.teacherId,
    });

    res.json(classes);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// UPDATE CLASS
// ==========================
router.put("/:id", async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// ==========================
// DELETE CLASS
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);

    res.json({
      message: "Class deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;