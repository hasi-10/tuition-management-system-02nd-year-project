import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";

import {
  Search,
  EyeFill,
  CurrencyDollar,
  HourglassSplit,
  CheckCircleFill,
  XCircleFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminPayments() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  const [search, setSearch] = useState("");

const [payments, setPayments] = useState([]);

const location = useLocation();
const payment = location.state?.payment;











const loadPayments = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/payment"
    );

    setPayments(res.data);

  } catch (err) {

    console.log(err);

  }
};



useEffect(() => {

  const savedTheme = localStorage.getItem("theme");

  setDarkMode(savedTheme === "dark");

  loadPayments();

}, []);






useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  setDarkMode(savedTheme === "dark");

  loadPayments();

}, []);

 const approvePayment = async (id) => {
  try {

    await axios.put(
      `http://localhost:5000/api/payment/approve/${id}`
    );

    alert("Payment Approved Successfully!");

    loadPayments();

  } catch (err) {

    console.log(err);

    alert("Failed to approve payment.");

  }
};






const rejectPayment = async (id) => {
  try {

    await axios.put(
      `http://localhost:5000/api/payment/reject/${id}`
    );

    alert("Payment Rejected!");

    loadPayments();

  } catch (err) {

    console.log(err);

    alert("Failed to reject payment.");

  }
};
 



const filteredPayments = payments.filter((payment) => {
  const fullName = `${payment.firstName} ${payment.lastName}`.toLowerCase();
  const email = (payment.email || "").toLowerCase();

  return (
    fullName.includes(search.toLowerCase()) ||
    email.includes(search.toLowerCase())
  );
});



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
            title="Payments"
            subtitle="Manage student payments"
          />

          <div className="container-fluid p-4">

            {/* ================= SUMMARY CARDS ================= */}

<div className="row g-4 mb-4">

  {/* Total Income */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>
          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Total Income
          </h6>

          <h2 className="fw-bold">
            Rs. 450,000
          </h2>

          <small className="text-success">
            +12% this month
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#0d6efd",
          }}
        >
          <CurrencyDollar
            size={30}
            color="white"
          />
        </div>

      </div>
    </div>

  </div>

  {/* Pending */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Pending Verification
          </h6>

          <h2 className="fw-bold">
            18
          </h2>

          <small className="text-warning">
            Waiting for review
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#ffc107",
          }}
        >
          <HourglassSplit
            size={30}
            color="white"
          />
        </div>

      </div>
    </div>

  </div>

  {/* Verified */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Approved Payments
          </h6>

          <h2 className="fw-bold">
            302
          </h2>

          <small className="text-success">
            Successfully approved
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#198754",
          }}
        >
          <CheckCircleFill
            size={30}
            color="white"
          />
        </div>

      </div>
    </div>

  </div>

  {/* Rejected */}

  <div className="col-md-6 col-xl-3">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="card-body d-flex justify-content-between align-items-center p-4">

        <div>

          <h6
            style={{
              color: darkMode ? "#d1d5db" : "#6c757d",
            }}
          >
            Rejected Payments
          </h6>

          <h2 className="fw-bold">
            5
          </h2>

          <small className="text-danger">
            Need resubmission
          </small>

        </div>

        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            width: "65px",
            height: "65px",
            background: "#dc3545",
          }}
        >
          <XCircleFill
            size={30}
            color="white"
          />
        </div>

      </div>
    </div>

  </div>

</div>
{/* ================= SEARCH & FILTERS ================= */}

<div className="row g-3 mb-4">

  {/* Search */}

  <div className="col-lg-4">

    <div className="position-relative">

      <Search
        className="position-absolute"
        style={{
          top: "50%",
          left: "18px",
          transform: "translateY(-50%)",
          color: "#6c757d",
        }}
      />

      <input
        type="text"
        className="form-control rounded-4 border-0 shadow-sm ps-5 py-3"
        placeholder="Search student or receipt..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          background: darkMode ? "#3a4047" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
        }}
      />

    </div>

  </div>

  {/* Grade */}

  <div className="col-lg-2">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Grades</option>
      <option>Grade 6</option>
      <option>Grade 7</option>
      <option>Grade 8</option>
      <option>Grade 9</option>
      <option>Grade 10</option>
      <option>Grade 11</option>
    </select>

  </div>

  {/* Method */}

  <div className="col-lg-3">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Methods</option>
      <option>Bank Deposit</option>
      <option>Online Payment</option>
    </select>

  </div>

  {/* Status */}

  <div className="col-lg-3">

    <select
      className="form-select rounded-4 py-3"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <option>All Status</option>
      <option>Pending</option>
      <option>Approved</option>
      <option>Rejected</option>
    </select>

  </div>

</div>

{/* ================= PAYMENT TABLE ================= */}

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

<div className="card-body p-0">

<table className="table align-middle mb-0">

<thead>

<tr
  style={{
    background: darkMode ? "#495057" : "#f8f9fa",
  }}
>
  <th className="ps-4 py-3">Receipt No</th>
  <th>Student Name</th>
  <th>Teacher Name</th>
  <th>Grade</th>
  <th>Subject</th>
  <th>Amount</th>
  <th>Payment Method</th>
  <th>Status</th>
  <th className="text-center">Actions</th>
</tr>

</thead>

<tbody>

{filteredPayments.map((payment) => (

<tr
  key={payment._id}
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

<td className="ps-4 fw-bold">
 {payment.receiptNumber}
</td>

<td>
  {payment.firstName} {payment.lastName}
</td>

<td>
  {payment.teacher}
</td>

<td>

<span className="badge bg-primary px-3 py-2">
  {payment.grade}
</span>

</td>

<td>
  {payment.subject}
</td>

<td className="fw-bold">
  Rs. {payment.amount}
</td>

<td>

<span
  className={`badge ${
    payment.paymentMethod === "Bank Deposit"
      ? "bg-warning text-dark"
      : "bg-success"
  } px-3 py-2`}
>
  {payment.paymentMethod}
</span>

</td>

<td>

<span
  className={`badge ${
    payment.status === "Pending"
      ? "bg-warning text-dark"
      : payment.status === "Approved"
      ? "bg-success"
      : "bg-danger"
  } px-3 py-2`}
>
  {payment.status}
</span>

</td>



<td className="text-center">



<button
  className="btn btn-outline-primary btn-sm me-2"
  onClick={() =>
    navigate(`/payment-details/${payment._id}`)
  }
>
  <EyeFill />
</button>




  {payment.status === "Pending" && (
    <>
      <button
        className="btn btn-success btn-sm me-2"
        onClick={() => approvePayment(payment._id)}
      >
        Approve
      </button>

      <button
        className="btn btn-danger btn-sm"
        onClick={async () => {
          try {

            await axios.put(
              `http://localhost:5000/api/payment/reject/${payment._id}`
            );

            alert("Payment Rejected");

            loadPayments();

          } catch (err) {

            console.log(err);

            alert("Failed");

          }
        }}
      >
        Reject
      </button>
    </>
  )}

</td>









</tr>

))}

</tbody>

</table>

</div>

</div>
  </div>

</div>

          </div>

        </div>

  );
}

export default AdminPayments;
        