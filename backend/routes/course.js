const express = require("express");
const router = express.Router();

const Course = require("../models/Course");


// ======================
// Create Course
// ======================

router.post("/", async (req, res) => {
  try {

    const course = new Course(req.body);

    await course.save();

    res.status(201).json(course);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Failed to create course",
    });

  }
});


// ======================
// Get All Courses
// ======================

router.get("/", async (req, res) => {

  try {

    const courses = await Course.find()
      .populate("teacher", "name email");

    res.json(courses);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Failed to fetch courses",
    });

  }

});

// ======================
// Get Courses of Logged-in Teacher
// ======================

router.get("/teacher/:teacherId", async (req, res) => {

  try {

    const courses = await Course.find({
      teacher: req.params.teacherId,
      status: "Active",
    }).sort({
      createdAt: -1,
    });

    res.json(courses);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Failed to fetch teacher courses",
    });

  }

});

// ======================
// Get Teacher Course By Grade
// ======================

router.get("/teacher/:teacherId/:grade", async (req, res) => {
  try {

    const course = await Course.findOne({
      teacher: req.params.teacherId,
      grade: req.params.grade,
      status: "Active",
    });

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    res.json(course);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });

  }
});

module.exports = router;