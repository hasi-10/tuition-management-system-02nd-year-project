const upload = require("../middleware/upload");
const express = require("express");

const router = express.Router();

const {
  saveProfile,
  getProfile,
} = require("../controllers/StudentProfileController");

// Get profile by email
router.get("/:email", getProfile);

// Create or update profile
router.post("/", saveProfile);

router.post(
  "/upload",
  upload.single("profileImage"),
  async (req, res) => {
    try {
      res.json({
        success: true,
        image: req.file.filename,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Image upload failed",
      });
    }
  }
);

module.exports = router;