import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "react-bootstrap-icons";
import profile from "../assets/profile.png";

function StudentProfileDropdown({
  fullName,
  profileImage,
}) {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="position-relative d-flex align-items-center"
      style={{ cursor: "pointer" }}
      onClick={() => setShowMenu(!showMenu)}
    >
      <img
        src={
          profileImage
            ? `http://localhost:5000/uploads/${profileImage}`
            : profile
        }
        alt="profile"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover",
          border: "2px solid #e5e5e5",
        }}
      />

      <div className="ms-3">
        <h6 className="mb-0 fw-bold">
          {fullName}
        </h6>

<small
  style={{
    color:
      localStorage.getItem("theme") === "dark"
        ? "#d1d5db"
        : "#6c757d",
  }}
>
  Student
</small>
      </div>

      <ChevronDown
        className="ms-3"
        size={20}
      />

      {showMenu && (
        <div
          className="position-absolute bg-white shadow rounded-4 p-3"
          style={{
            width: "250px",
            top: "70px",
            right: "0",
            zIndex: 1000,
          }}
        >
          <div className="text-center mb-3">

            <img
              src={
                profileImage
                  ? `http://localhost:5000/uploads/${profileImage}`
                  : profile
              }
              alt="profile"
              className="rounded-circle mb-2"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
              }}
            />

            <h6 className="fw-bold mb-0">
              {fullName}
            </h6>

            <small className="text-muted">
              Student
            </small>
          </div>

          <hr />

          <button
            className="btn btn-light w-100 text-start mb-2"
            onClick={() =>
              navigate("/studentprofile")
            }
          >
            View Profile
          </button>

          <button
            className="btn btn-light w-100 text-start mb-2"
            onClick={() =>
              navigate("/settings")
            }
          >
            Settings
          </button>

          <button
            className="btn btn-danger w-100"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentProfileDropdown;