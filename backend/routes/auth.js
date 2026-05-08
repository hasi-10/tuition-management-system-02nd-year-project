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
    const { email, password, role } = req.body;

    console.log(req.body);

    const user = await User.findOne({
      email: email.trim(),
      role
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
      role: user.role
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Login failed"
    });
  }
});

module.exports = router;