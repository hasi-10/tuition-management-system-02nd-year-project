const Enrollment = require("../models/Enrollment/enrollment");
const Teacher = require("../models/Teacher/teacher");

const getStudentTimetable = async (req, res) => {
  try {
    const { email } = req.params;

    console.log("Student Email:", email);

    const enrollments = await Enrollment.find({
      studentEmail: email,
      status: "Active",
    });

    console.log("Enrollments:");
    console.log(enrollments);

    let timetable = [];

    for (const enrollment of enrollments) {

      console.log("Looking for teacher:", enrollment.teacher);

   const teacher = await Teacher.findOne({
  name: {
    $regex: new RegExp("^" + enrollment.teacher + "$", "i"),
  },
});

      console.log("Teacher Found:");
      console.log(teacher);

      if (!teacher) continue;



const classSchedule = teacher.schedule.filter(
  (item) =>
    item.grade.replace("Grade ", "").trim() ===
    enrollment.grade.trim()
);




      console.log("Matched Schedule:");
      console.log(classSchedule);

      classSchedule.forEach((item) => {
        timetable.push({
          teacher: teacher.name,
          subject: teacher.subject,
          grade: item.grade,
          day: item.day,
          time: item.time,
          fee: item.fee,
        });
      });
    }

    console.log("Final Timetable:");
    console.log(timetable);

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