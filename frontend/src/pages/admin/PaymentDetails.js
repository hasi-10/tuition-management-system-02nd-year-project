import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";


import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import slip from "../../assets/payment-slip.jpg";

function PaymentDetails() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [payment, setPayment] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const loadPayment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/payment/details/${id}`
        );

        setPayment(res.data);

      } catch (err) {
        console.log(err);
      }
    };

    loadPayment();
  }, [id]);

  if (!payment) {
    return (
      <div className="text-center mt-5">
        <h3>Loading Payment...</h3>
      </div>
    );
  }

  return (

    <div className="container-fluid p-0">

      <div className="row g-0">

        <AdminSidebar />

        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: darkMode ? "#2f343a" : "#eef2f7",
            minHeight: "100vh",
          }}
        >

          <AdminTopNavbar
            title="Receipt Details"
            subtitle="View and verify payment"
          />

          <div className="container-fluid p-4">

            {/* ================= PAYMENT INFORMATION ================= */}

            <div
              className="card border-0 shadow rounded-4 mb-4"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  💳 Payment Information
                </h4>

                <div className="row">

                  {/* Receipt */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Receipt Number
                    </h6>
                    <p className="fs-5 fw-bold text-primary">
                      {payment?.receiptNumber}
                    </p>
                  </div>

                  {/* Student */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Student
                    </h6>
                    <p className="fs-5">
                      {payment?.firstName} {payment?.lastName}
                    </p>
                  </div>

                  {/* Teacher */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Teacher
                    </h6>
                    <p className="fs-5">
                      {payment?.teacher}
                    </p>
                  </div>

                  {/* Grade */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Grade
                    </h6>
                    <span className="badge bg-primary fs-6 px-3 py-2">
                      {payment?.grade}
                    </span>
                  </div>

                  {/* Subject */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Subject
                    </h6>
                    <p className="fs-5">
                      {payment?.subject}
                    </p>
                  </div>

                  {/* Amount */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Amount
                    </h6>
                    <p className="fs-4 fw-bold text-success">
                      Rs. {payment?.amount}
                    </p>
                  </div>

                  {/* Payment Method */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Payment Method
                    </h6>
                    <span
                      className={`badge ${
                        payment?.paymentMethod === "Bank Deposit"
                          ? "bg-warning text-dark"
                          : "bg-success"
                      } fs-6 px-3 py-2`}
                    >
                      {payment.paymentMethod}
                    </span>
                  </div>

                  {/* Payment Date */}
                  <div className="col-md-6 mb-4">
                    <h6
                      className="fw-bold"
                      style={{
                        color: darkMode ? "#d1d5db" : "#6c757d",
                      }}
                    >
                      Payment Date
                    </h6>
                    <p className="fs-5">
                      {new Date(payment.createdAt).toLocaleDateString()}
                    </p>
                  </div>

                </div>

              </div>
            </div>

            {/* ================= PAYMENT PROOF ================= */}

            <div
              className="card border-0 shadow rounded-4 mb-4"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              <div className="card-body p-4">

                <h4 className="fw-bold mb-4">
                  {payment.paymentMethod === "Bank Deposit"
                    ? "🏦 Uploaded Bank Slip"
                    : "🧾 Generated Payment Receipt"}
                </h4>

                {payment.paymentMethod === "Bank Deposit" ? (

                  <>
                    <div className="text-center">
                      <img
                        src={
                          payment?.slipImage
                            ? `http://localhost:5000/uploads/${payment.slipImage}`
                            : slip
                        }
                        alt="Bank Slip"
                        className="img-fluid rounded-4 shadow"
                        style={{
                          maxHeight: "650px",
                          objectFit: "contain",
                        }}
                      />
                    </div>

                    <div className="text-center mt-3">
                      <small>
                        Please verify the uploaded bank slip before approving.
                      </small>
                    </div>
                  </>

                ) : (

                  <div className="container">

                    <div
                      className="border rounded-4 p-4"
                      style={{
                        maxWidth: "700px",
                        margin: "auto",
                        background: darkMode ? "#495057" : "#f8f9fa",
                      }}
                    >

                      <h3 className="text-center mb-4">
                        O'Guru Online Institute
                      </h3>

                      <h5 className="text-center mb-4">
                        PAYMENT RECEIPT
                      </h5>

                      <hr />

                      <div className="row mb-3">
                        <div className="col-6"><strong>Receipt No</strong></div>
                        <div className="col-6">{payment.receiptNumber}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Student</strong></div>
                        <div className="col-6">
                          {payment.firstName} {payment.lastName}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Email</strong></div>
                        <div className="col-6">{payment.email}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Teacher</strong></div>
                        <div className="col-6">{payment.teacher}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Subject</strong></div>
                        <div className="col-6">{payment.subject}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Grade</strong></div>
                        <div className="col-6">{payment.grade}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Payment Method</strong></div>
                        <div className="col-6">{payment.paymentMethod}</div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Amount</strong></div>
                        <div className="col-6 text-success fw-bold">
                          Rs. {payment.amount}
                        </div>
                      </div>

                      <div className="row mb-3">
                        <div className="col-6"><strong>Status</strong></div>
                        <div className="col-6">
                          {payment.status}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6"><strong>Date</strong></div>
                        <div className="col-6">
                          {new Date(payment.createdAt).toLocaleDateString()}
                        </div>
                      </div>

                      <hr />

                      <div className="text-center mt-3">
                        <small>
                          This is a system generated payment receipt.
                        </small>
                      </div>

                    </div>

                  </div>

                )}

              </div>
            </div>

            {/* ================= ACTION BUTTONS ================= */}

            <div className="d-flex justify-content-end gap-3">

              {/* Back */}
              <button
                className="fw-bold rounded-pill border-0"
                style={{
                  fontSize: "16px",
                  padding: "10px 30px",
                  minWidth: "140px",
                  background: darkMode ? "#6c757d" : "#212529",
                  color: "#ffffff",
                }}
                onClick={() => navigate("/adminpayments")}
              >
                ← Back
              </button>

              {/* Reject */}
              <button
                className="btn btn-danger rounded-pill px-5 fw-bold"
                onClick={async () => {
                  if (!window.confirm("Reject this payment?")) return;
                  try {
                    await axios.put(
                      `http://localhost:5000/api/payment/reject/${payment._id}`
                    );
                    alert("Payment Rejected Successfully!");
                    navigate("/adminpayments");
                  } catch (error) {
                    console.log(error);
                    alert("Failed to reject payment.");
                  }
                }}
              >
                Reject
              </button>

              {/* Approve */}
              <button
                className="btn btn-success rounded-pill px-5 fw-bold"
                onClick={async () => {
                  if (!window.confirm("Approve this payment?")) return;
                  try {
                    await axios.put(
                      `http://localhost:5000/api/payment/approve/${payment._id}`
                    );
                    alert("Payment Approved Successfully!");
                    navigate("/adminpayments");
                  } catch (error) {
                    console.log(error);
                    alert("Failed to approve payment.");
                  }
                }}
              >
                Approve
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default PaymentDetails;