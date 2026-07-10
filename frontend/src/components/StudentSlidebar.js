import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HouseDoorFill,
  Book,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  PersonVideo,
  ChevronLeft,
  ChevronRight
} from "react-bootstrap-icons";
import logo from "../assets/image-removebg-preview.png";

function StudentSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Helper function to check if a route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div
      className="d-flex flex-column justify-content-between"
      style={{
        background: "linear-gradient(180deg,#001a75,#0033cc)",
        minHeight: "100vh",
        width: isCollapsed ? "80px" : "280px",
        transition: "width 0.3s ease",
        position: "relative",
        flexShrink: 0,
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "50%",
          right: "-14px",
          transform: "translateY(-50%)",
          background: "#0033cc",
          border: "2px solid white",
          borderRadius: "50%",
          width: "28px",
          height: "28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          cursor: "pointer",
          zIndex: 10,
          transition: "transform 0.3s ease",
        }}
      >
        {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      <div>
        {/* Logo */}
        <div
          className="text-center py-4"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="logo"
            style={{
              width: isCollapsed ? "50px" : "180px",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {/* Menu */}
        <div className="px-2">
          {/* Dashboard */}
          <button
            className={`btn w-100 text-start fw-bold rounded-4 mb-3 p-3 ${
              isActive("/studentdashboard")
                ? "btn-light"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/studentdashboard")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <HouseDoorFill
              className={isCollapsed ? "" : "me-3"}
              size={isCollapsed ? 24 : 20}
            />
            {!isCollapsed && "Dashboard"}
          </button>

          {/* My Courses */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/mycourses")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/mycourses")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <Book className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "My Courses"}
          </button>

          {/* Timetable */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/my-timetable")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/my-timetable")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <Calendar3 className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Timetable"}
          </button>

          {/* Teachers */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/allteachers")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/allteachers")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <PersonVideo className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Teachers"}
          </button>

          {/* Payment */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/payment")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/payment")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <CreditCard className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Payment"}
          </button>

          {/* Results */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/results")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/results")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <FileText className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Results"}
          </button>

          {/* Material Tracking */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/material-tracking")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/material-tracking")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <Folder className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Material Tracking"}
          </button>

          {/* Settings */}
          <button
            className={`btn w-100 text-start rounded-4 mb-3 p-3 ${
              isActive("/settings")
                ? "btn-light fw-bold"
                : "btn-outline-light border-0"
            }`}
            onClick={() => navigate("/settings")}
            style={{
              justifyContent: isCollapsed ? "center" : "flex-start",
              display: "flex",
              alignItems: "center",
              padding: isCollapsed ? "12px" : "16px",
            }}
          >
            <Gear className={isCollapsed ? "" : "me-3"} size={isCollapsed ? 24 : 20} />
            {!isCollapsed && "Settings"}
          </button>
        </div>
      </div>

      {/* Logout */}
      <div className="p-2">
        <button 
          className="btn btn-light w-100 rounded-4 fw-bold p-3"
          style={{
            justifyContent: isCollapsed ? "center" : "flex-start",
            display: "flex",
            alignItems: "center",
            padding: isCollapsed ? "12px" : "16px",
          }}
        >
          <BoxArrowRight className={isCollapsed ? "" : "me-2"} size={isCollapsed ? 24 : 20} />
          {!isCollapsed && "Logout"}
        </button>
      </div>
    </div>
  );
}

export default StudentSidebar;