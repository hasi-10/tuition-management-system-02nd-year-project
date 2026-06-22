import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";

function EditQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quiz, setQuiz] = useState({
    title: "",
    subject: "",
    grade: "",
    duration: "",
    dueDate: "",
  });

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    try {
      const res = await API.get(`/quizzes/${id}`);

      setQuiz({
        title: res.data.title,
        subject: res.data.subject,
        grade: res.data.grade,
        duration: res.data.duration,
        dueDate: res.data.dueDate?.split("T")[0],
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setQuiz({
      ...quiz,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async () => {
    try {
      await API.put(`/quizzes/${id}`, quiz);

      alert("Quiz Updated Successfully");

      navigate("/teacher-quizzes");
    } catch (err) {
      console.log(err);
      alert("Update Failed");
    }
  };

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Edit Quiz
      </h1>

      <div className="card p-4 shadow">

        <input
          className="form-control mb-3"
          name="title"
          placeholder="Quiz Title"
          value={quiz.title}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="subject"
          placeholder="Subject"
          value={quiz.subject}
          onChange={handleChange}
        />

        <input
          className="form-control mb-3"
          name="grade"
          placeholder="Grade"
          value={quiz.grade}
          onChange={handleChange}
        />

        <input
          type="number"
          className="form-control mb-3"
          name="duration"
          placeholder="Duration"
          value={quiz.duration}
          onChange={handleChange}
        />

        <input
          type="date"
          className="form-control mb-4"
          name="dueDate"
          value={quiz.dueDate}
          onChange={handleChange}
        />

        <button
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Update Quiz
        </button>

      </div>

    </div>
  );
}

export default EditQuiz;