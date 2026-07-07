import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckLg } from "react-bootstrap-icons";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function PaymentSuccess() {

  const navigate = useNavigate();

  const downloadReceipt = () => {
    const payment =
  JSON.parse(localStorage.getItem("payment")) || {};
    console.log(payment);
    
    const doc = new jsPDF();
    
    doc.setFontSize(22);
    doc.text("O'Guru Online Institute", 20, 20);
    
    doc.setFontSize(18);
    doc.text("PAYMENT RECEIPT", 20, 35);
    
    autoTable(doc, {
      startY: 50,
      body: [
        ["Receipt No", payment.receiptNumber],
        ["Student", payment.firstName + " " + payment.lastName],
        ["Email", payment.email],
        ["Teacher", payment.teacher],
        ["Subject", payment.subject],
        ["Grade", payment.grade],
        ["Payment Method", payment.paymentMethod],
        ["Amount", "Rs. " + payment.amount],
        ["Status", payment.status],
        ["Date", new Date(payment.createdAt).toLocaleString()],
      ],
    });
    
    // Add footer text
    doc.setFontSize(12);
    doc.text(
      "Thank you for choosing O'Guru Online Institute.",
      20,
      250
    );
    doc.text(
      "This receipt is computer generated.",
      20,
      258
    );
    doc.text(
      "Status : PAID",
      20,
      266
    );
    
    doc.save("PaymentReceipt.pdf");
  };

  const payment = JSON.parse(localStorage.getItem("payment"));

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
          <CheckLg size={90} color="#ffd700" />
        </div>

        <h2 className="text-white fw-bold mb-3">Payment Success</h2>

        <p className="text-white mb-4" style={{ fontSize: "18px" }}>
          Your payment has been completed successfully.
        </p>

        {/* Payment Summary Card */}
        <div className="card shadow border-0 rounded-4 p-4 mb-4 bg-white">
          <h3 className="fw-bold mb-4">Payment Summary</h3>

          <div className="d-flex justify-content-between mb-3">
            <span>Receipt Number</span>
            <strong>{payment?.receiptNumber}</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>Payment Method</span>
            <strong>{payment?.paymentMethod}</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>Teacher</span>
            <strong>{payment?.teacher}</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>Subject</span>
            <strong>{payment?.subject}</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>Grade</span>
            <strong>{payment?.grade}</strong>
          </div>

          <div className="d-flex justify-content-between mb-3">
            <span>Amount</span>
            <strong className="text-success">Rs. {payment?.amount}</strong>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <button
            className="btn btn-warning fw-bold rounded-pill px-4 py-2"
            onClick={downloadReceipt}
            style={{
              background: "#ffd700",
              color: "#001a70",
            }}
          >
            ⬇ Download Receipt
          </button>

          <button
            className="btn btn-light fw-bold rounded-pill px-4 py-2"
            onClick={() => navigate("/studentdashboard")}
          >
            🏠 Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccess;