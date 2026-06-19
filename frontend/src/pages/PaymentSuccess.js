import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckLg } from "react-bootstrap-icons";

function PaymentSuccess() {

  const navigate = useNavigate();

  return (

    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom,#001a70,#0033cc)",
      }}
    >

      <div
        className="text-center p-5"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "35px",
          border: "1px solid rgba(255,255,255,0.2)",
          width: "500px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        }}
      >

        <div
          className="mx-auto mb-4 d-flex justify-content-center align-items-center"
          style={{
            width: "170px",
            height: "170px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.25)",
          }}
        >

          <CheckLg
            size={90}
            color="#ffd700"
          />

        </div>

        <h2 className="text-white fw-bold mb-3">

          Payment Success

        </h2>

        <p
          className="text-white mb-5"
          style={{
            fontSize: "18px",
          }}
        >

          Your payment has been completed successfully.

        </p>

        <button

          className="btn btn-light fw-bold rounded-pill px-5 py-2"

          onClick={() => navigate("/mycourses")}

        >

          Done

        </button>

      </div>

    </div>

  );

}

export default PaymentSuccess;