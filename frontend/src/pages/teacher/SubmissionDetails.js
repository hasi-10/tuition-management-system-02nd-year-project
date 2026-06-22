import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";

function SubmissionDetails() {

  const { id } = useParams();

  const [submission, setSubmission] =
    useState(null);

  useEffect(() => {
    fetchSubmission();
  }, []);

  const fetchSubmission = async () => {
    try {

      const res = await API.get(
        `/submissions/details/${id}`
      );

      setSubmission(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  if (!submission) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container py-5">

      <h1 className="fw-bold mb-4">
        Submission Details
      </h1>

      <div className="card p-4 shadow mb-4">

        <h4>
          Student :
          {" "}
          {submission.studentName}
        </h4>

        <h5>
          Score :
          {" "}
          {submission.score}
        </h5>

      </div>

      {submission.answers.map(
        (answer, index) => (
          <div
            key={index}
            className="card p-4 mb-3"
          >

            <h5>
              Question {index + 1}
            </h5>

            <p>
              <strong>
                Student Answer:
              </strong>
              {" "}
              {answer.selectedAnswer}
            </p>

            <p>
              <strong>
                Correct Answer:
              </strong>
              {" "}
              {answer.correctAnswer}
            </p>

          </div>
        )
      )}

    </div>
  );
}

export default SubmissionDetails;