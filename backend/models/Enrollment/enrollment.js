const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    studentEmail: {
      type: String,
      required: true,
    },

    studentName: {
      type: String,
      required: true,
    },

    teacher: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      required: true,
    },

    paymentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Payment",
    },

    status: {
      type: String,
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Enrollment", enrollmentSchema);