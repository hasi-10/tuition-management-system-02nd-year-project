const mongoose = require("mongoose");

const paymentSlipSchema = new mongoose.Schema({

    studentName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    teacher: {
        type: String,
        required: true
    },

    grade: {
        type: String,
        required: true
    },

    month: {
        type: String,
        required: true
    },

    fileName: {
        type: String,
        required: true
    },

    filePath: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: "Pending"
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model(
    "PaymentSlip",
    paymentSlipSchema
);