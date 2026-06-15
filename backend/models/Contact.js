const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    teacherName: {
      type: String,
      default: "",
    },
    telephone: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);