const Payment = require("../models/Payment");
const PaymentSlip = require("../models/PaymentSlip");


// Save Payment
const savePayment = async (req, res) => {

  try {

    const payment = new Payment(req.body);

    await payment.save();

    res.status(201).json({

      success: true,
      message: "Payment Saved",
      data: payment,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({

      success: false,
      message: "Server Error",

    });

  }

};

// Upload Bank Payment Slip

const uploadPaymentSlip = async (req, res) => {

  try {

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

      message: "Server Error",

    });

  }

};



module.exports = {

  savePayment,

  uploadPaymentSlip,

};