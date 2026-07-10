const mongoose = require("mongoose");

const enrollmentSchema = new mongoose.Schema(
  {
    classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class",
    default: null,
},
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
teacherName: {
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
        meetingLink: {
      type: String,
      default: "", // Removed required: true because physical classes don't need online links
    },
   
    startTime: {
     type: String,
     default: "",
    },

    endTime: {
     type: String,
     default: "",
    },

    date: {
     type: String,
     default: "",
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