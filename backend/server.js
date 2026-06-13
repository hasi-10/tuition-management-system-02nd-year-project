const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

// MongoDB connection
mongoose.connect(
  "mongodb+srv://oguru_admin:Oguru%40123%23%23@tuition-cluster.soxuxwi.mongodb.net/tuitionDB"
)
.then(() => console.log("MongoDB Connected ✅"))
.catch((err) => console.log("DB Error:", err));

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});