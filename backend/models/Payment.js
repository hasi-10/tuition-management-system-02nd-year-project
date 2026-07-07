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

receiptNumber: {
    type: String,
    unique: true,
},


    status: {
  type: String,
  enum: ["Pending", "Approved", "Rejected"],
  default: "Pending",
},

bankName: {
  type: String,
  default: "",
},

accountNumber: {
  type: String,
  default: "",
},

slipImage: {
  type: String,
  default: "",
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Payment", paymentSchema);