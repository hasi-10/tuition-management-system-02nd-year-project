const express = require("express");
const multer = require("multer");

const router = express.Router();

const {
  savePayment,
  uploadPaymentSlip,
} = require("../controllers/PaymentController");

// Multer Storage
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },

});

const upload = multer({ storage });

// Save online payment
router.post("/", savePayment);

// Upload bank payment slip
router.post(
  "/upload-slip",
  upload.single("file"),
  uploadPaymentSlip
);

module.exports = router;