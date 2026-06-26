import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PersonCircle,
  ChevronDown,
  Person,
  Gear,
  BoxArrowRight,
} from "react-bootstrap-icons";

function AdminProfileDropdown({
  fullName = "Administrator",
  profileImage = "",
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  return (
    <div
      className="position-relative"
      ref={dropdownRef}
    >
      <div
        className="d-flex align-items-center"
        style={{
          cursor: "pointer",
        }}
        onClick={() =>
          setShowDropdown(!showDropdown)
        }
      >
        {profileImage ? (
          <img
            src={profileImage}
            alt="profile"
            className="rounded-circle"
            width="55"
            height="55"
            style={{
              objectFit: "cover",
            }}
          />
        ) : (
          <PersonCircle
            size={55}
            color="#0d6efd"
          />
        )}

        <div className="ms-3">
          <h6 className="mb-0 fw-bold">
            {fullName}
          </h6>

          <small className="text-muted">
            Administrator
          </small>
        </div>

        <ChevronDown className="ms-3" />
      </div>

      {showDropdown && (
        <div
          className="card shadow border-0 position-absolute end-0 mt-3"
          style={{
            width: "230px",
            zIndex: 9999,
            borderRadius: "15px",
          }}
        >
          <div className="list-group list-group-flush">

            <button
              className="list-group-item list-group-item-action border-0 py-3"
              onClick={() => navigate("/adminprofile")}
            >
              <Person className="me-3" />
              My Profile
            </button>

            <button
              className="list-group-item list-group-item-action border-0 py-3"
              onClick={() =>
                navigate("/adminsettings")
              }
            >
              <Gear className="me-3" />
              Settings
            </button>
<button
  className="btn btn-danger w-100 rounded-3 fw-bold py-2 mx-2 my-2"
  onClick={() => navigate("/")}
>
  <BoxArrowRight className="me-2" />
  Logout
</button>

          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProfileDropdown;