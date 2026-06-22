import React, { useEffect, useState } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import API from "../../services/api";

function TeacherSubmissions() {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const res = await API.get(
        `/submissions/${quizId}`
      );

      setSubmissions(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Quiz Submissions
      </h1>

      <div className="card p-4 shadow">

        <table className="table">

<thead>
  <tr>
    <th>Student Name</th>
    <th>Score</th>
    <th>Percentage</th>
    <th>Submitted Date</th>
    <th>Action</th>
  </tr>
</thead>

         <tbody>
  {submissions.map((submission) => (
    <tr key={submission._id}>
      <td>{submission.studentName}</td>

      <td>{submission.score}</td>

      <td>
        {Math.round(
          (submission.score /
            submission.answers.length) *
            100
        )}
        %
      </td>

      <td>
        {new Date(
          submission.submittedAt
        ).toLocaleDateString()}
      </td>

      <td>
        <button
          className="btn btn-primary btn-sm"
          onClick={() =>
            navigate(
              `/teacher/submission/${submission._id}`
            )
          }
        >
          View Answers
        </button>
      </td>
    </tr>
  ))}
</tbody>

        </table>

      </div>

    </div>
  );
}

export default TeacherSubmissions;