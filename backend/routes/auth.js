const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { name, dob, email, phone, password } = req.body;

    const existingUser = await User.findOne({
      email: email.trim()
    });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(
      password.trim(),
      10
    );

    const newUser = new User({
      name,
      dob,
      email: email.trim(),
      phone,
      password: hashedPassword,
      role: "student"
    });

    await newUser.save();

    res.status(201).json({
      message: "Registration successful"
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Registration failed"
    });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.trim()
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    const isMatch = await bcrypt.compare(
      password.trim(),
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role
      },
      "secretkey"
    );

    res.json({
      token,
      role: user.role,
      email: user.email,
      name: user.name
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Login failed"
    });
  }
});

// CREATE TEACHER
router.post("/create-teacher", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    // Check if teacher already exists
    const existingTeacher = await User.findOne({
      email: email.trim()
    });

    if (existingTeacher) {
      return res.status(400).json({
        message: "Teacher with this email already exists"
      });
    }

    const hashedPassword = await bcrypt.hash(password.trim(), 10);

    const teacher = new User({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      password: hashedPassword,
      role: "teacher",
    });

    await teacher.save();

    res.status(201).json({
      message: "Teacher Created Successfully",
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        phone: teacher.phone,
        role: teacher.role
      }
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error creating teacher",
      error: err.message
    });
  }
});

// CHANGE PASSWORD
router.put("/change-password", async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    // Find user
    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Check current password
    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Current password is incorrect",
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(
      newPassword,
      10
    );

    user.password = hashedPassword;

    await user.save();

    res.json({
      message: "Password updated successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
});




module.exports = router;