const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    teacherId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
      required: true,
    },

    className: {
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

    day: {
      type: String,
      required: true,
    },

    startTime: {
      type: String,
      required: true,
    },

    endTime: {
      type: String,
      required: true,
    },

    monthlyFee: {
      type: Number,
      required: true,
    },

    mode: {
      type: String,
      enum: ["Online", "Physical"],
      default: "Online",
    },

    meetingLink: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
date: {
  type: String,
},

status: {
  type: String,
  default: "upcoming",
},

students: {
  type: Number,
  default: 0,
},

views: {
  type: Number,
  default: 0,
},

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Class", classSchema);