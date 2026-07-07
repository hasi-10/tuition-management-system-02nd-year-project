const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {

    firstName: {
      type: String,
      required: true,
    },
lastName: {
  type: String,
  default: "",
},

    email: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    teacher: {
      type: String,
      required: true,
    },
    teacherName: {
  type: String,
},

    subject: {
      type: String,
      required: true,
    },

    grade: {
      type: String,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    status: {
  type: String,
  enum: ["Pending", "Approved", "Rejected"],
  default: "Pending",
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);