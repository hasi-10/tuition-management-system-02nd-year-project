const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// start server FIRST (so it doesn't crash)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB (we will fix later)
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/test")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));