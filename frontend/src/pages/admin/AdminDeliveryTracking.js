import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

import {
  Search,
  Truck,
  BoxSeamFill,
  CheckCircleFill,
  ClockFill,
  ArrowRepeat
} from "react-bootstrap-icons";

function AdminDeliveryTracking() {

  const navigate = useNavigate();

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    setDarkMode(savedTheme === "dark");

  }, []);

  const [orders] = useState([

    {

      id: "ORD-001",

      student: "John Doe",

      item: "Study Materials Package",

      tracking: "TRK1234567890",

      orderDate: "2026-03-20",

      expected: "2026-03-30",

      status: "In Transit",

    },

    {

      id: "ORD-002",

      student: "Jane Smith",

      item: "Chemistry Lab Kit",

      tracking: "TRK0987654321",

      orderDate: "2026-03-18",

      expected: "2026-03-28",

      status: "Delivered",

    },

    {

      id: "ORD-003",

      student: "Mike Johnson",

      item: "Mathematics Textbook Set",

      tracking: "TRK5555666677",

      orderDate: "2026-03-22",

      expected: "2026-04-02",

      status: "Processing",

    }

  ]);

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
title="Delivery Tracking"
subtitle="Track orders and delivery status"
/>

<div className="container-fluid p-4">
    {/* ================= DELIVERY SUMMARY ================= */}

<div className="row g-4 mb-4">

  {/* Pending */}

  <div className="col-md-6 col-lg-3">

    <div
      className="card border-0 shadow rounded-4"
      style={{
        background: "#d8e7f8",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <h5 className="fw-bold mb-2">Pending</h5>

          <span className="badge bg-secondary px-4 py-2 fs-6">
            {
              orders.filter(
                (o) => o.status === "Pending"
              ).length
            }
          </span>

        </div>

        <ClockFill
          size={34}
          className="text-danger"
        />

      </div>

    </div>

  </div>

  {/* Processing */}

  <div className="col-md-6 col-lg-3">

    <div
      className="card border-0 shadow rounded-4"
      style={{
        background: "#d8e7f8",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <h5 className="fw-bold mb-2">
            Processing
          </h5>

          <span className="badge bg-secondary px-4 py-2 fs-6">
            {
              orders.filter(
                (o) => o.status === "Processing"
              ).length
            }
          </span>

        </div>

        <ArrowRepeat
          size={34}
          className="text-warning"
        />

      </div>

    </div>

  </div>

  {/* In Transit */}

  <div className="col-md-6 col-lg-3">

    <div
      className="card border-0 shadow rounded-4"
      style={{
        background: "#d8e7f8",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <h5 className="fw-bold mb-2">
            In Transit
          </h5>

          <span className="badge bg-secondary px-4 py-2 fs-6">
            {
              orders.filter(
                (o) => o.status === "In Transit"
              ).length
            }
          </span>

        </div>

        <Truck
          size={34}
          className="text-primary"
        />

      </div>

    </div>

  </div>

  {/* Delivered */}

  <div className="col-md-6 col-lg-3">

    <div
      className="card border-0 shadow rounded-4"
      style={{
        background: "#d8e7f8",
      }}
    >

      <div className="card-body d-flex justify-content-between align-items-center">

        <div>

          <h5 className="fw-bold mb-2">
            Delivered
          </h5>

          <span className="badge bg-secondary px-4 py-2 fs-6">
            {
              orders.filter(
                (o) => o.status === "Delivered"
              ).length
            }
          </span>

        </div>

        <CheckCircleFill
          size={34}
          className="text-success"
        />

      </div>

    </div>

  </div>

</div>
{/* ================= DELIVERY ORDERS ================= */}

{orders.map((order, index) => (

<div
key={index}
className="card border-0 shadow rounded-4 mb-4"
style={{
background: darkMode ? "#3a4047" : "#dfe4ee",
}}
>

<div className="card-body">

<div className="row align-items-start">

{/* ================= LEFT TIMELINE ================= */}

<div className="col-lg-4">

<div className="fw-bold mb-3">

{order.id}

<span
className={`badge ms-2 ${
order.status === "Delivered"
? "bg-success"
: order.status === "In Transit"
? "bg-primary"
: order.status === "Processing"
? "bg-warning text-dark"
: "bg-danger"
}`}
>

{order.status}

</span>

</div>

<div className="d-flex mb-3">

<div className="me-3">

<div className="text-primary fs-5">🔵</div>

<div
style={{
height: "28px",
borderLeft: "2px solid #0d6efd",
marginLeft: "8px",
}}
></div>

<div className="text-primary fs-5">🔵</div>

<div
style={{
height: "28px",
borderLeft: "2px solid #0d6efd",
marginLeft: "8px",
}}
></div>

<div className="text-primary fs-5">

{order.status === "Pending"
? "⚪"
: "🔵"}

</div>

<div
style={{
height: "28px",
borderLeft: "2px solid #0d6efd",
marginLeft: "8px",
}}
></div>

<div className="fs-5">

{order.status === "Delivered"
? "🟢"
: "⚪"}

</div>

</div>

<div>

<p className="mb-4">

<strong>Order Placed</strong>

<br />

<small>{order.orderDate}</small>

</p>

<p className="mb-4">

<strong>Processing</strong>

<br />

<small>2026-03-21</small>

</p>

<p className="mb-4">

<strong>In Transit</strong>

<br />

<small>2026-03-25</small>

</p>

<p>

<strong>Delivered</strong>

<br />

<small>{order.expected}</small>

</p>

</div>

</div>

</div>

{/* ================= RIGHT DETAILS ================= */}

<div className="col-lg-8">

<div className="row">

<div className="col-md-7">

<p>

<strong>Student :</strong>

{" "}

{order.student}

</p>

<p>

<strong>Item :</strong>

{" "}

{order.item}

</p>

<p>

<strong>Tracking No :</strong>

{" "}

{order.tracking}

</p>

</div>

<div className="col-md-5">

<p>

<strong>Order Date :</strong>

<br />

{order.orderDate}

</p>

<p>

<strong>Expected :</strong>

<br />

{order.expected}

</p>

</div>

</div>

<div className="text-end mt-3">

<button
className="btn btn-primary rounded-pill px-4"
onClick={() =>
navigate("/delivery-details", {
state: order,
})
}
>

View Details

</button>

</div>

</div>

</div>

</div>

</div>

))}
      </div>

    </div>

  </div>

</div>

  );

}

export default AdminDeliveryTracking;