import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Download, HouseDoor, Printer } from "react-bootstrap-icons";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PaymentSuccess() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState({
    receiptNumber: "",
    paymentMethod: "",
    teacher: "",
    subject: "",
    grade: "",
    amount: "",
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    createdAt: "",
  });

  useEffect(() => {
    const paymentData = JSON.parse(localStorage.getItem("payment")) || {};
    setPayment(paymentData);
  }, []);

  const downloadReceipt = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("O'Guru Online Institute", 20, 20);
    
    doc.setFontSize(18);
    doc.text("PAYMENT RECEIPT", 20, 35);
    
    autoTable(doc, {
      startY: 50,
      body: [
        ["Receipt No", payment.receiptNumber || "N/A"],
        ["Student", `${payment.firstName || ""} ${payment.lastName || ""}`],
        ["Email", payment.email || "N/A"],
        ["Teacher", payment.teacher || "N/A"],
        ["Subject", payment.subject || "N/A"],
        ["Grade", payment.grade || "N/A"],
        ["Payment Method", payment.paymentMethod || "N/A"],
        ["Amount", `Rs. ${payment.amount || 0}`],
        ["Status", payment.status || "PAID"],
        ["Date", payment.createdAt ? new Date(payment.createdAt).toLocaleString() : new Date().toLocaleString()],
      ],
    });
    
    doc.setFontSize(12);
    doc.text("Thank you for choosing O'Guru Online Institute.", 20, 250);
    doc.text("This receipt is computer generated.", 20, 258);
    doc.text("Status : PAID", 20, 266);
    
    doc.save(`PaymentReceipt-${payment.receiptNumber || Date.now()}.pdf`);
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f0f4ff 0%, #e0e8ff 100%)",
        padding: "20px",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            {/* Main Card */}
            <div
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
              style={{
                background: "#ffffff",
              }}
            >
              <div className="card-body p-5">
                {/* Success Icon */}
                <div className="text-center mb-4">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-circle"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      boxShadow: "0 8px 30px rgba(16, 185, 129, 0.3)",
                    }}
                  >
                    <CheckCircle size={40} color="#ffffff" />
                  </div>
                </div>

                {/* Success Message */}
                <div className="text-center mb-4">
                  <h2 className="fw-bold mb-2" style={{ color: "#0f172a" }}>
                    Payment Successful!
                  </h2>
                  <p className="text-muted mb-0" style={{ fontSize: "15px" }}>
                    Your payment has been completed successfully.
                  </p>
                </div>

                {/* Payment Summary Header */}
                <div className="mb-3">
                  <h6 className="fw-bold" style={{ color: "#0f172a", fontSize: "14px" }}>
                    Payment Summary
                  </h6>
                </div>

                {/* Payment Details Card */}
                <div
                  className="p-4 rounded-3 mb-4"
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                  }}
                >
                  {/* Receipt Number */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom" style={{ borderColor: "#e2e8f0 !important" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Receipt Number
                    </span>
                    <span className="fw-bold" style={{ color: "#0f172a", fontSize: "13px" }}>
                      {payment.receiptNumber || "N/A"}
                    </span>
                  </div>

                  {/* Payment Method */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom" style={{ borderColor: "#e2e8f0 !important" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Payment Method
                    </span>
                    <span className="fw-bold" style={{ color: "#0f172a", fontSize: "13px" }}>
                      {payment.paymentMethod || "N/A"}
                    </span>
                  </div>

                  {/* Teacher */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom" style={{ borderColor: "#e2e8f0 !important" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Teacher
                    </span>
                    <span className="fw-bold" style={{ color: "#0f172a", fontSize: "13px" }}>
                      {payment.teacher || "N/A"}
                    </span>
                  </div>

                  {/* Subject */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom" style={{ borderColor: "#e2e8f0 !important" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Subject
                    </span>
                    <span className="fw-bold" style={{ color: "#0f172a", fontSize: "13px" }}>
                      {payment.subject || "N/A"}
                    </span>
                  </div>

                  {/* Grade */}
                  <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom" style={{ borderColor: "#e2e8f0 !important" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Grade
                    </span>
                    <span className="fw-bold" style={{ color: "#0f172a", fontSize: "13px" }}>
                      {payment.grade || "N/A"}
                    </span>
                  </div>

                  {/* Amount */}
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Amount
                    </span>
                    <span className="fw-bold" style={{ color: "#059669", fontSize: "20px" }}>
                      Rs. {payment.amount || 0}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="row g-3">
                  {/* Download Receipt */}
                  <div className="col-md-6">
                    <button
                      className="btn w-100 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: "#f1f5f9",
                        color: "#0f172a",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s",
                      }}
                      onClick={downloadReceipt}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#e2e8f0";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f1f5f9";
                      }}
                    >
                      <Download size={16} />
                      Download Receipt
                    </button>
                  </div>

                  {/* Print Receipt */}
                  <div className="col-md-6">
                    <button
                      className="btn w-100 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: "#f1f5f9",
                        color: "#0f172a",
                        border: "1px solid #e2e8f0",
                        transition: "all 0.2s",
                      }}
                      onClick={handlePrintReceipt}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#e2e8f0";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "#f1f5f9";
                      }}
                    >
                      <Printer size={16} />
                      Print Receipt
                    </button>
                  </div>

                  {/* Go to Dashboard - Full Width */}
                  <div className="col-12">
                    <button
                      className="btn w-100 py-2 rounded-pill fw-bold d-flex align-items-center justify-content-center gap-2"
                      style={{
                        background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                        color: "#ffffff",
                        border: "none",
                        transition: "all 0.2s",
                      }}
                      onClick={() => navigate("/studentdashboard")}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.02)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    >
                      <HouseDoor size={16} />
                      Go to Dashboard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>
        {`
          @media print {
            body * {
              visibility: hidden;
            }
            .card, .card * {
              visibility: visible;
            }
            .card {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              box-shadow: none !important;
              border: 1px solid #e2e8f0 !important;
            }
            .btn, .btn * {
              display: none !important;
            }
            .card-body {
              padding: 40px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default PaymentSuccess;