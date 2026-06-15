const Contact = require("../models/Contact");

const createContact = async (req, res) => {
  try {
    const {
      address,
      email,
      name,
      subject,
      teacherName,
      telephone,
      message,
    } = req.body;

    const newContact = new Contact({
      address,
      email,
      name,
      subject,
      teacherName,
      telephone,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
      data: newContact,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to send message",
    });
  }
};

module.exports = { createContact };