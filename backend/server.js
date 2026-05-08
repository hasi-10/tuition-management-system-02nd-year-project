const express = require("express");
const cors = require("cors");
require('dotenv').config();
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// Connect to database
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});