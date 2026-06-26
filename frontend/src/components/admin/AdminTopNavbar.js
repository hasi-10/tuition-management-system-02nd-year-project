import React, { useState, useEffect } from "react";
import { Bell } from "react-bootstrap-icons";
import API from "../../services/api";
import AdminProfileDropdown from "./AdminProfileDropdown";

function AdminTopNavbar({ title, subtitle }) {
  const [admin, setAdmin] = useState({
    fullName: "",
    profileImage: "",
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const email = localStorage.getItem("email");

      const res = await API.get(`/profile/${email}`);

      setAdmin(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="shadow-sm px-5 py-3 d-flex justify-content-between align-items-center"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <div>
        <h2
          className="fw-bold mb-0"
          style={{
            color: darkMode ? "#ffffff" : "#000000",
          }}
        >
          {title}
        </h2>

        <small
          style={{
            color: darkMode ? "#d1d5db" : "#6c757d",
          }}
        >
          {subtitle}
        </small>
      </div>

      <div className="d-flex align-items-center">
        <div className="position-relative me-4">
          <Bell size={28} />
        </div>

        <AdminProfileDropdown
          fullName={admin.fullName || "Administrator"}
          profileImage={admin.profileImage}
        />
      </div>
    </div>
  );
}

export default AdminTopNavbar;