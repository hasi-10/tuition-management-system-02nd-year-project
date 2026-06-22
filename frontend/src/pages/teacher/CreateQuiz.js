import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plus } from "react-bootstrap-icons";
import API from "../../services/api";

function CreateQuiz() {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState({
  title: "",
  subject: "",
  grade: "",
  duration: "",
  dueDate: "",
});

  const [questions, setQuestions] = useState([
    {
      question: "",
      optionA: "",
      optionB: "",
      optionC: "",
      optionD: "",
      correctAnswer: "",
    },
  ]);

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        correctAnswer: "",
      },
    ]);
    
  };
  const handleQuestionChange = (
  index,
  field,
  value
) => {
  const updatedQuestions = [...questions];

  updatedQuestions[index][field] = value;

  setQuestions(updatedQuestions);
};
const handleSaveQuiz = async () => {
  try {
    const quiz = {
      title: quizData.title,
      subject: quizData.subject,
      teacher: "kamal silva",
      grade: quizData.grade,
      duration: quizData.duration,
      dueDate: quizData.dueDate,
      questions: questions,
    };

    const res = await API.post(
      "/quizzes",
      quiz
    );

    alert("Quiz Saved Successfully!");

    console.log(res.data);

    navigate("/teacher-quizzes");

  } catch (err) {
    console.log(err);

    alert("Failed to save quiz");
  }
};
  return (
    <div
      className="container-fluid py-4"
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div className="container">

        {/* Back Button */}
        <button
          className="btn btn-light rounded-pill mb-4 shadow-sm"
          onClick={() => navigate("/teacher-quizzes")}
        >
          <ArrowLeft className="me-2" />
          Back to Quiz Management
        </button>

        {/* Header */}
        <div className="mb-4">
          <h1 className="fw-bold">Create Quiz</h1>
          <p className="text-muted">
            Create a new quiz for your students
          </p>
        </div>

        {/* Quiz Details */}
        <div className="card border-0 shadow rounded-5 p-4 mb-4">
          <h3 className="fw-bold mb-4">Quiz Details</h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="fw-semibold">Quiz Title</label>
<input
  type="text"
  className="form-control rounded-pill"
  placeholder="Enter quiz title"
  value={quizData.title}
  onChange={(e) =>
    setQuizData({
      ...quizData,
      title: e.target.value,
    })
  }
/>
            </div>

            <div className="col-md-6 mb-3">
              <label className="fw-semibold">Subject</label>
<input
  type="text"
  className="form-control rounded-pill"
  placeholder="Enter subject"
  value={quizData.subject}
  onChange={(e) =>
    setQuizData({
      ...quizData,
      subject: e.target.value,
    })
  }
/>
            </div>

            <div className="col-md-4 mb-3">
              <label className="fw-semibold">Grade</label>
<input
  type="text"
  className="form-control rounded-pill"
  placeholder="Grade"
  value={quizData.grade}
  onChange={(e) =>
    setQuizData({
      ...quizData,
      grade: e.target.value,
    })
  }
/>
            </div>

            <div className="col-md-4 mb-3">
              <label className="fw-semibold">Duration (Minutes)</label>
<input
  type="number"
  className="form-control rounded-pill"
  placeholder="45"
  value={quizData.duration}
  onChange={(e) =>
    setQuizData({
      ...quizData,
      duration: e.target.value,
    })
  }
/>
            </div>

            <div className="col-md-4 mb-3">
              <label className="fw-semibold">Due Date</label>
<input
  type="date"
  className="form-control rounded-pill"
  value={quizData.dueDate}
  onChange={(e) =>
    setQuizData({
      ...quizData,
      dueDate: e.target.value,
    })
  }
/>
            </div>

          </div>
        </div>

        {/* Questions */}
        {questions.map((q, index) => (
          <div
            key={index}
            className="card border-0 shadow rounded-5 p-4 mb-4"
          >
            <h4 className="fw-bold mb-4">
              Question {index + 1}
            </h4>

            <div className="mb-3">
              <label className="fw-semibold">
                Question
              </label>
<textarea
  className="form-control rounded-4"
  rows="3"
  placeholder="Enter question"
  value={q.question}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "question",
      e.target.value
    )
  }
/>
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Option A</label>
<input
  type="text"
  className="form-control rounded-pill"
  value={q.optionA}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "optionA",
      e.target.value
    )
  }
/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Option B</label>
<input
  type="text"
  className="form-control rounded-pill"
  value={q.optionB}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "optionB",
      e.target.value
    )
  }
/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Option C</label>
<input
  type="text"
  className="form-control rounded-pill"
  value={q.optionC}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "optionC",
      e.target.value
    )
  }
/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Option D</label>
<input
  type="text"
  className="form-control rounded-pill"
  value={q.optionD}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "optionD",
      e.target.value
    )
  }
/>
              </div>

            </div>

            <div>
              <label className="fw-semibold">
                Correct Answer
              </label>
<input
  type="text"
  className="form-control rounded-pill"
  placeholder="Correct Answer"
  value={q.correctAnswer}
  onChange={(e) =>
    handleQuestionChange(
      index,
      "correctAnswer",
      e.target.value
    )
  }
/>
            </div>

          </div>
        ))}

        {/* Add Question */}
        <div className="text-center mb-4">
          <button
            className="btn rounded-pill px-4 py-2 fw-bold"
            style={{
              background: "#d18b16",
              color: "white",
            }}
            onClick={addQuestion}
          >
            <Plus className="me-2" />
            Add Another Question
          </button>
        </div>

        {/* Action Buttons */}
        <div className="text-center">

  <button
  onClick={handleSaveQuiz}
  className="btn rounded-pill px-5 py-3 fw-bold me-3"
            style={{
              background: "#d18b16",
              color: "white",
            }}
          >
            Save Quiz
          </button>

          <button
            className="btn btn-outline-secondary rounded-pill px-5 py-3 fw-bold"
            onClick={() => navigate("/teacher-quizzes")}
          >
            Cancel
          </button>

        </div>

      </div>
    </div>
  );
}

export default CreateQuiz;