const Payment = require("../models/Payment");
const Counter = require("../models/Counter");
const Enrollment = require("../models/Enrollment/enrollment");

// =================================
// SAVE ONLINE PAYMENT
// =================================
const savePayment = async (req, res) => {
  console.log("🔥 savePayment called");
  
  try {
    console.log("====== PAYMENT REQUEST ======");
    console.log(req.body);

    

// Today's date
const today = new Date();

const datePart =
  today.getFullYear().toString() +
  String(today.getMonth() + 1).padStart(2, "0") +
  String(today.getDate()).padStart(2, "0");

// Get next sequence number
const counter = await Counter.findByIdAndUpdate(
  "paymentReceipt",
  { $inc: { seq: 1 } },
  { new: true, upsert: true }
);

// Format 000001
const sequence = String(counter.seq).padStart(6, "0");

// Final Receipt Number
const receiptNumber = `OGR-PAY-${datePart}-${sequence}`;








const payment = new Payment({
    ...req.body,
    receiptNumber,
    status:"Pending",
});








    await payment.save();

    res.status(201).json({
      success: true,
      message: "Payment Saved Successfully",
      data: payment,
    });

 } catch (error) {

  console.log("====== PAYMENT ERROR ======");
  console.log(error);
  console.log(error.message);

  if (error.errors) {
    console.log(error.errors);
  }

  res.status(500).json({
    success: false,
    message: error.message,
  });
}


  
};

// =================================
// UPLOAD BANK PAYMENT SLIP
// =================================
const uploadPaymentSlip = async (req, res) => {
  try {

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    const payment = await Payment.findOne({
      email: req.body.email,
      teacher: req.body.teacher,
      subject: req.body.subject,
      status: "Pending",
    });

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    payment.bankName = req.body.bankName;
    payment.accountNumber = req.body.accountNumber;
    payment.slipImage = req.file.filename;

    await payment.save();

    res.status(200).json({
      success: true,
      message: "Bank Slip Uploaded Successfully",
      data: payment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// =================================
// GET STUDENT COURSES
// =================================
const getStudentCourses = async (req, res) => {
  try {

    const email = req.params.email;

    const courses = await Payment.find({ email });

    res.json(courses);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// =================================
// GET ALL PAYMENTS
// =================================
const getAllPayments = async (req, res) => {
  try {

    const payments = await Payment.find().sort({
      createdAt: -1,
    });

    res.json(payments);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// =================================
// APPROVE PAYMENT
// =================================
const approvePayment = async (req, res) => {
  try {


const enrollment = new Enrollment({
  studentName: `${payment.firstName} ${payment.lastName}`,
  studentEmail: payment.email,
  teacher: payment.teacher,
  subject: payment.subject,
  grade: payment.grade,

  // 🔥 IMPORTANT FIX
  classId: classData?._id,
  meetingLink: classData?.meetingLink,
  startTime: classData?.startTime,
  endTime: classData?.endTime,
  date: classData?.date,
  day: classData?.day,

  paymentId: payment._id,
  status: "Active",
});




    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    payment.status = "Approved";
    await payment.save();

    const existingEnrollment = await Enrollment.findOne({
      studentEmail: payment.email,
      teacher: payment.teacher,
      subject: payment.subject,
      grade: payment.grade,
    });

    if (!existingEnrollment) {

      const enrollment = new Enrollment({
        studentName: `${payment.firstName} ${payment.lastName}`,
        studentEmail: payment.email,
        teacher: payment.teacher,
        subject: payment.subject,
        grade: payment.grade,
        paymentId: payment._id,
        status: "Active",
      });

      await enrollment.save();
    }

    res.json({
      success: true,
      message: "Payment Approved Successfully",
      payment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// =================================
// REJECT PAYMENT
// =================================
const rejectPayment = async (req, res) => {
  try {

    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }

    payment.status = "Rejected";

    await payment.save();

    res.json({
      success: true,
      message: "Payment Rejected",
      payment,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }
};

// =================================
// GET PAYMENT BY ID
// =================================
const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        success: false,
        message: "Payment not found",
      });
    }

    res.json(payment);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  savePayment,
  uploadPaymentSlip,
  getStudentCourses,
  getAllPayments,
  getPaymentById,
  approvePayment,
  rejectPayment,
};