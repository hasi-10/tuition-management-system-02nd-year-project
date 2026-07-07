const Payment = require("../models/Payment");
const PaymentSlip = require("../models/PaymentSlip");
const Enrollment = require("../models/Enrollment/enrollment");


// =================================
// SAVE ONLINE PAYMENT
// =================================
const savePayment = async (req, res) => {
  try {
    console.log("====== PAYMENT REQUEST ======");
    console.log(req.body);

    const payment = new Payment({
      ...req.body,
      status: "Pending",
    });

    await payment.save();

    console.log("Payment saved successfully");

    res.status(201).json({
      success: true,
      message: "Payment Saved",
      data: payment,
    });

  } catch (error) {

    console.log("====== PAYMENT ERROR ======");
    console.log(error);

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

    const paymentSlip = new PaymentSlip({

      studentName: req.body.studentName,
      email: req.body.email,
      subject: req.body.subject,
      teacher: req.body.teacher,
      grade: req.body.grade,
      month: req.body.month,
      fileName: req.file.filename,
      filePath: req.file.path,

    });

    await paymentSlip.save();

    res.status(201).json({
      success: true,
      message: "Payment Slip Uploaded Successfully",
      data: paymentSlip,
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

    const courses = await Payment.find({
      email,
    });

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
console.log("🔥 APPROVE PAYMENT HIT:", req.params.id);
    const payment = await Payment.findById(req.params.id);

    if (!payment) {
      return res.status(404).json({
        message: "Payment not found",
      });
    }



console.log("🔥 PAYMENT FOUND:", payment);


const updatedPayment = await Payment.findByIdAndUpdate(
  req.params.id,
  { status: "Approved" },
  { new: true }
);

console.log("🔥 PAYMENT UPDATED:", updatedPayment.status);

// Check if enrollment already exists
const existingEnrollment = await Enrollment.findOne({
  studentEmail: payment.email,
  teacher: payment.teacher,
  subject: payment.subject,
  grade: payment.grade,
});



if (!existingEnrollment) {
console.log("🔥 PAYMENT APPROVED");
const enrollment = new Enrollment({

  studentName: `${payment.firstName} ${payment.lastName}`,

  studentEmail: payment.email,

  teacher: payment.teacher,        // ✔ ONLY ID
  teacherName: payment.teacherName,  // ✔ ONLY NAME (optional display)

  subject: payment.subject,
  grade: payment.grade,

  paymentId: payment._id,
  status: "Active",

});
console.log("🔥 CREATING ENROLLMENT...");
  await enrollment.save();
console.log("🔥 ENROLLMENT SAVED");
}

res.json({
  message: "Payment approved successfully",
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

    res.json(payment);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  savePayment,
  uploadPaymentSlip,
  getStudentCourses,
  getAllPayments,
  approvePayment,
  rejectPayment,
};