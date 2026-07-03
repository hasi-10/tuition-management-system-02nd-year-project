import React, { useState, useEffect } from "react";

import {
  PersonCircle,
  ShieldLockFill,
  PaletteFill,
  BellFill,
  EnvelopeFill,
  InfoCircleFill,
  SaveFill,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminSettings() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {

    const savedTheme = localStorage.getItem("theme");

    setDarkMode(savedTheme === "dark");

  }, []);

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
title="Settings"
subtitle="Manage your system preferences"
/>

<div className="container-fluid p-4">

{/* ================= PROFILE ================= */}

<div
className="card border-0 shadow rounded-4 mb-4"
style={{
background: darkMode ? "#3a4047" : "#ffffff",
color: darkMode ? "#ffffff" : "#000000",
}}
>

<div className="card-body p-4">

<h3 className="fw-bold mb-4">

<PersonCircle className="me-2 text-primary"/>

Administrator Profile

</h3>

<div className="row">

<div className="col-md-6 mb-3">

<label className="form-label">

Full Name

</label>

<input
className="form-control"
defaultValue="System Administrator"
/>

</div>

<div className="col-md-6 mb-3">

<label className="form-label">

Email

</label>

<input
className="form-control"
defaultValue="admin@gmail.com"
/>

</div>

<div className="col-md-6 mb-3">

<label className="form-label">

Phone Number

</label>

<input
className="form-control"
defaultValue="0771234567"
/>

</div>

<div className="col-md-6 mb-3">

<label className="form-label">

Username

</label>

<input
className="form-control"
defaultValue="admin"
/>

</div>

</div>

</div>
{/* ================= SECURITY ================= */}

<div
className="card border-0 shadow rounded-4 mb-4"
style={{
background: darkMode ? "#3a4047" : "#ffffff",
color: darkMode ? "#ffffff" : "#000000",
}}
>

<div className="card-body p-4">

<h3 className="fw-bold mb-4">

<ShieldLockFill className="me-2 text-danger"/>

Security Settings

</h3>

<div className="row">

<div className="col-md-4 mb-3">

<label className="form-label">

Current Password

</label>

<input
type="password"
className="form-control"
placeholder="********"
/>

</div>

<div className="col-md-4 mb-3">

<label className="form-label">

New Password

</label>

<input
type="password"
className="form-control"
placeholder="********"
/>

</div>

<div className="col-md-4 mb-3">

<label className="form-label">

Confirm Password

</label>

<input
type="password"
className="form-control"
placeholder="********"
/>

</div>

</div>

<div className="text-end">

<button className="btn btn-danger rounded-pill px-4">

<ShieldLockFill className="me-2"/>

Change Password

</button>

</div>

</div>

</div>

{/* ================= EMAIL SETTINGS ================= */}

<div
className="card border-0 shadow rounded-4 mb-4"
style={{
background: darkMode ? "#3a4047" : "#ffffff",
color: darkMode ? "#ffffff" : "#000000",
}}
>

<div className="card-body p-4">

<h3 className="fw-bold mb-4">

<EnvelopeFill className="me-2 text-primary"/>

Email Settings

</h3>

<div className="form-check form-switch mb-3">

<input
className="form-check-input"
type="checkbox"
defaultChecked
/>

<label className="form-check-label">

Receive payment notifications

</label>

</div>

<div className="form-check form-switch mb-3">

<input
className="form-check-input"
type="checkbox"
defaultChecked
/>

<label className="form-check-label">

Receive new student registration emails

</label>

</div>

<div className="form-check form-switch">

<input
className="form-check-input"
type="checkbox"
/>

<label className="form-check-label">

Receive weekly system reports

</label>

</div>

</div>

</div>


{/* ================= THEME ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h3 className="fw-bold mb-4">

      <PaletteFill className="me-2 text-warning" />

      Theme

    </h3>

    <div className="form-check form-switch mb-4">

      <input
        className="form-check-input"
        type="checkbox"
        id="darkMode"
        checked={darkMode}
        onChange={(e) => {
          const enabled = e.target.checked;

          setDarkMode(enabled);

          localStorage.setItem(
            "theme",
            enabled ? "dark" : "light"
          );
        }}
      />

      <label
        className="form-check-label ms-2"
        htmlFor="darkMode"
      >
        Dark Mode
      </label>

    </div>



  </div>

</div>

  {/* Notifications */}

  <div className="col-lg-6 mb-4">

    <div
      className="card border-0 shadow rounded-4 h-100"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >

      <div className="card-body p-4">

        <h3 className="fw-bold mb-4">

          <BellFill className="me-2 text-success" />

          Notification Settings

        </h3>

        <div className="form-check form-switch mb-3">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">

            Enable System Notifications

          </label>

        </div>

        <div className="form-check form-switch mb-3">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">

            Payment Notifications

          </label>

        </div>

        <div className="form-check form-switch mb-3">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">

            Quiz Notifications

          </label>

        </div>

        <div className="form-check form-switch">

          <input
            className="form-check-input"
            type="checkbox"
            defaultChecked
          />

          <label className="form-check-label">

            Delivery Notifications

          </label>

        </div>

      </div>

    </div>

  </div>

</div>
{/* ================= SYSTEM INFORMATION ================= */}

<div
  className="card border-0 shadow rounded-4 mb-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
  }}
>

  <div className="card-body p-4">

    <h3 className="fw-bold mb-4">

      <InfoCircleFill className="me-2 text-info" />

      System Information

    </h3>

    <div className="row">

      <div className="col-md-6">

        <table className="table">

          <tbody>

            <tr>

              <th>System Name</th>

              <td>O'ගුරු Tuition Management System</td>

            </tr>

            <tr>

              <th>Version</th>

              <td>1.0.0</td>

            </tr>

            <tr>

              <th>Database</th>

              <td>MongoDB Atlas</td>

            </tr>

            <tr>

              <th>Frontend</th>

              <td>React.js</td>

            </tr>

          </tbody>

        </table>

      </div>

      <div className="col-md-6">

        <table className="table">

          <tbody>

            <tr>

              <th>Backend</th>

              <td>Node.js / Express.js</td>

            </tr>

            <tr>

              <th>Last Backup</th>

              <td>Today - 09:30 AM</td>

            </tr>

            <tr>

              <th>Server Status</th>

              <td>

                <span className="badge bg-success">

                  Online

                </span>

              </td>

            </tr>

            <tr>

              <th>Administrator</th>

              <td>System Admin</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>

{/* ================= ACTION BUTTONS ================= */}

<div
  className="card border-0 shadow rounded-4"
  style={{
    background: darkMode ? "#3a4047" : "#ffffff",
  }}
>

  <div className="card-body">

    <div className="d-flex justify-content-end gap-3">

      <button
        className="btn btn-outline-secondary rounded-pill px-4"
        onClick={() => window.location.reload()}
      >

        Reset Settings

      </button>

      <button
        className="btn btn-primary rounded-pill px-4"
        onClick={() => alert("Settings saved successfully!")}
      >

        <SaveFill className="me-2" />

        Save Changes

      </button>

    </div>

  </div>

</div>

        </div>

      </div>

    </div>

  </div>
  

);

}

export default AdminSettings;

