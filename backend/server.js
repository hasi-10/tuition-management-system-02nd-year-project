const contactRoutes = require("./routes/contact");
const studentProfileRoutes = require("./routes/studentProfile");
const paymentRoutes = require("./routes/payment");
const quizRoutes = require("./routes/quizRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/contact", contactRoutes);
app.use("/api/profile", studentProfileRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/quizzes", quizRoutes);
app.use("/api/submissions", submissionRoutes);

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