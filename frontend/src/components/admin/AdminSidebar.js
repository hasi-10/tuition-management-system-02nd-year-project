import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CreditCardFill } from "react-bootstrap-icons";
import { PatchQuestionFill } from "react-bootstrap-icons";
import { FolderFill } from "react-bootstrap-icons";


import {
  HouseDoorFill,
  PeopleFill,
  PersonVideo,
  Calendar3,
  CameraVideo,
  ClipboardData,
  PatchQuestion,
  CreditCard,
  Folder,
  Truck,
  CalendarCheckFill,
  BarChartFill,
  FileBarGraphFill,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";

import logo from "../../assets/image-removebg-preview.png";

function AdminSidebar() {
  const navigate = useNavigate();

  return (
    <div
      className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
      style={{
        background: "linear-gradient(180deg,#001a75,#0033cc)",
        minHeight: "100vh",
      }}
    >
      <div>
        {/* Logo */}
        <div className="text-center py-4">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "180px",
            }}
          />
        </div>

        {/* Menu */}
        <div className="px-3">

          <NavLink
            to="/admindashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
                : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
            }
            style={{ textDecoration: "none" }}
          >
            <HouseDoorFill className="me-3" />
            Dashboard
          </NavLink>

<NavLink
  to="/adminstudents"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <PeopleFill className="me-3" />
  Manage Students
</NavLink>

<NavLink
  to="/adminteachers"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <PersonVideo className="me-3" />
  Manage Teachers
</NavLink>

          <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
            <Calendar3 className="me-3" />
            Class Timetable
          </button>

          <button className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3">
            <CameraVideo className="me-3" />
            Online Classes
          </button>

<NavLink
  to="/admin-class-attendance"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <CalendarCheckFill className="me-3" />
  Class Attendance
</NavLink>

<NavLink
  to="/adminquizzes"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <PatchQuestionFill className="me-3" />
  Quiz Monitoring
</NavLink>

<NavLink
  to="/adminpayments"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <CreditCardFill className="me-3" />
  Payments
</NavLink>

<NavLink
  to="/admin-study-materials"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <FolderFill className="me-3" />
  Study Materials
</NavLink>

<NavLink
  to="/admin-delivery-tracking"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <Truck className="me-3" />
  Delivery Tracking
</NavLink>
<NavLink
  to="/admin-reports"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <FileBarGraphFill className="me-3" />
  Reports
</NavLink>

<NavLink
  to="/admin-settings"
  className={({ isActive }) =>
    isActive
      ? "btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
      : "btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
  }
  style={{ textDecoration: "none" }}
>
  <Gear className="me-3" />
  Settings
</NavLink>

        </div>
      </div>

      {/* Logout */}
      <div className="p-3">
        <button
          className="btn btn-light w-100 rounded-4 fw-bold p-3"
          onClick={() => navigate("/")}
        >
          <BoxArrowRight className="me-2" />
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;