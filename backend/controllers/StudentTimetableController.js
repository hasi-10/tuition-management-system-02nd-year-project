const Enrollment = require("../models/Enrollment/enrollment");

// GET STUDENT TIMETABLE
const getStudentTimetable = async (req, res) => {
  try {
    const { email } = req.params;

    console.log("Student Email:", email);

    const enrollments = await Enrollment.find({
      studentEmail: email,
      status: "Active",
    });

    console.log("Enrollments:", enrollments);

    let timetable = enrollments.map((enrollment) => {
      return {
        teacher: enrollment.teacher,
        subject: enrollment.subject,
        grade: enrollment.grade,
        day: enrollment.day,
        date: enrollment.date,
        startTime: enrollment.startTime,
        endTime: enrollment.endTime,
        meetingLink: enrollment.meetingLink,
        status: enrollment.status,
      };
    });

    console.log("Final Timetable:", timetable);

    res.json(timetable);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getStudentTimetable,
};