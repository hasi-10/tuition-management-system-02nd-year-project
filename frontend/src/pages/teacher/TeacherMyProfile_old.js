import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Bell,
  ChevronDown,
  HouseDoorFill,
  Calendar3,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  PlayCircle,
  CameraVideo,
  PatchQuestion,
  CalendarEvent,
  Book,
  PersonVideo,
  People,
  GraphUp,
  PersonCircle,
} from "react-bootstrap-icons";

import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

function TeacherMyProfile() {
  const navigate = useNavigate();

  // Teacher Data State
  const [teacherData, setTeacherData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    bio: "",
  });

  const [grades, setGrades] = useState(["Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"]);
  const [showAddGrade, setShowAddGrade] = useState(false);
  const [newGrade, setNewGrade] = useState("");
  const [loading, setLoading] = useState(false);
  
  const [schedule, setSchedule] = useState([
    { id: 1, day: "Monday", time: "08:00 - 10:00", grade: "Grade 6", fee: 1500 },
    { id: 2, day: "Tuesday", time: "11:00 - 13:00", grade: "Grade 9", fee: 1500 },
    { id: 3, day: "Wednesday", time: "14:00 - 16:00", grade: "Grade 10", fee: 1500 },
  ]);

  const [showEditModal, setShowEditModal] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);

  // Fetch teacher data from API
  useEffect(() => {
    const fetchTeacher = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/teachers/6a3bdd5b1eff5b3f8c486b38"
        );
        
        setTeacherData({
          fullName: res.data.name || "",
          email: res.data.email || "",
          phone: res.data.phone || "",
          subject: res.data.subject || "",
          bio: res.data.bio || "",
        });

        setGrades(res.data.grades || []);
        setSchedule(res.data.schedule || []);
      } catch (err) {
        console.error("Fetch error:", err);
        alert("Failed to load teacher data");
      }
    };

    fetchTeacher();
  }, []);

  const handleAddGrade = () => {
    if (newGrade.trim()) {
      setGrades([...grades, newGrade.trim()]);
      setNewGrade("");
      setShowAddGrade(false);
    }
  };

  const handleDeleteGrade = (index) => {
    const updatedGrades = grades.filter((_, i) => i !== index);
    setGrades(updatedGrades);
  };

  const handleEditSchedule = (scheduleItem) => {
    setEditingSchedule(scheduleItem);
    setShowEditModal(true);
  };

  const handleDeleteSchedule = (id) => {
    const updatedSchedule = schedule.filter(
      item => (item._id || item.id) !== id
    );
    setSchedule(updatedSchedule);
  };

  const handleUpdateSchedule = (e) => {
    e.preventDefault();

    const updatedSchedule = schedule.map(item =>
      (item._id || item.id) === (editingSchedule._id || editingSchedule.id)
        ? editingSchedule
        : item
    );

    setSchedule(updatedSchedule);
    setShowEditModal(false);
    setEditingSchedule(null);
  };

  // Add new class to schedule
  const handleAddSchedule = () => {
    const newClass = {
      id: Date.now(),
      day: "Sunday",
      time: "00:00 - 00:00",
      grade: "Grade 12",
      fee: 1500,
    };

    setSchedule([...schedule, newClass]);
  };

  const handleSaveProfile = async () => {
    console.log("🚀 SAVE BUTTON CLICKED");
    console.log("📊 Current teacherData:", teacherData);
    console.log("📊 Current grades:", grades);
    console.log("📊 Current schedule:", schedule);
    console.log("SAVE BUTTON CLICKED");

    try {
      setLoading(true);

      // Remove temporary 'id' field from schedule before sending to MongoDB
      const scheduleToSave = schedule.map(({ id, ...rest }) => rest);
      
      console.log("📤 Schedule to save:", JSON.stringify(scheduleToSave, null, 2));
      console.log("GRADES BEFORE SAVE:", grades);

      const payload = {
        name: teacherData.fullName,
        email: teacherData.email,
        phone: teacherData.phone,
        subject: teacherData.subject,
        bio: teacherData.bio,
        grades: grades,
        schedule: scheduleToSave,
      };

      console.log("📤 Full payload:", JSON.stringify(payload, null, 2));

      const response = await axios.put(
        "http://localhost:5000/api/teachers/6a3bdd5b1eff5b3f8c486b38",
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      console.log("✅ SERVER RESPONSE:", response.data);

      // Update local state with server response
      if (response.data) {
        setTeacherData({
          fullName: response.data.name || teacherData.fullName,
          email: response.data.email || teacherData.email,
          phone: response.data.phone || teacherData.phone,
          subject: response.data.subject || teacherData.subject,
          bio: response.data.bio || teacherData.bio,
        });
        setGrades(response.data.grades || grades);
        setSchedule(response.data.schedule || schedule);
      }

      alert("✅ Profile Updated Successfully!");
    } catch (error) {
      console.error("❌ ERROR:", error);
      
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        alert(`Server Error: ${error.response.status} - ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response from server. Please check if server is running.");
      } else {
        console.error("Error message:", error.message);
        alert(`Error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* Sidebar */}
        <div
          className="col-lg-2 d-flex flex-column justify-content-between"
          style={{
            background: "linear-gradient(to bottom,#001a70,#0033cc)",
            minHeight: "100vh",
          }}
        >
          <div>
            <div className="text-center py-4">
              <img
                src={logo}
                alt="logo"
                style={{ width: "180px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </div>

            <div className="px-3">
              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
                onClick={() => navigate("/teacher-dashboard")}
              >
                <HouseDoorFill className="me-3" />
                Dashboard
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
                onClick={() => navigate("/teacher-classes")}
              >
                <Book className="me-3" />
                My Classes
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <People className="me-3" />
                Students
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <PatchQuestion className="me-3" />
                Quizzes
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <Folder className="me-3" />
                Study Materials
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <CreditCard className="me-3" />
                Payments
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <GraphUp className="me-3" />
                Results
              </button>

              {/* Active Button - My Profile */}
              <button
                className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
              >
                <PersonCircle className="me-3" />
                My Profile
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4"
              >
                <Gear className="me-3" />
                Settings
              </button>
            </div>
          </div>

          <div className="p-3">
            <button 
              className="btn btn-light w-100 rounded-4 fw-bold p-3"
              onClick={handleLogout}
            >
              <BoxArrowRight className="me-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col">
          {/* Top Navbar */}
          <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
            <h2 className="fw-bold mb-0">
              My Profile
            </h2>

            <div className="d-flex align-items-center">
              <Bell size={22} className="me-4" />

              <img
                src={profile}
                alt="profile"
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              <div className="ms-3" style={{ cursor: "pointer" }}>
                <h5 className="mb-0 fw-bold">
                  {teacherData.fullName}
                </h5>
                <small className="text-muted">
                  Teacher
                </small>
              </div>
              <ChevronDown className="ms-3" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="container-fluid px-4 py-4">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-5">
                
                {/* Header */}
                <div className="text-center mb-5">
                  <div 
                    className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ 
                      width: "100px", 
                      height: "100px", 
                      background: "#4a90e2",
                      color: "white"
                    }}
                  >
                    <PersonCircle size={50} />
                  </div>
                  <h1 className="display-5 fw-bold" style={{ color: "#1a2332" }}>My Profile</h1>
                </div>

                {/* Profile Information */}
                <div className="mb-5">
                  <h3 className="fw-bold mb-4" style={{ color: "#1a2332", borderBottom: "3px solid #4a90e2", paddingBottom: "10px" }}>
                    Profile Information
                  </h3>
                  
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <PersonCircle className="me-3 mt-1" size={20} style={{ color: "#4a90e2" }} />
                        <div style={{ width: "100%" }}>
                          <small className="text-muted d-block">Full Name</small>
                          <input
                            type="text"
                            className="form-control"
                            value={teacherData.fullName}
                            onChange={(e) =>
                              setTeacherData({
                                ...teacherData,
                                fullName: e.target.value,
                              })
                            }
                            style={{ borderColor: "#4a90e2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <Bell className="me-3 mt-1" size={20} style={{ color: "#4a90e2" }} />
                        <div style={{ width: "100%" }}>
                          <small className="text-muted d-block">Email</small>
                          <input
                            type="email"
                            className="form-control"
                            value={teacherData.email}
                            onChange={(e) =>
                              setTeacherData({
                                ...teacherData,
                                email: e.target.value,
                              })
                            }
                            style={{ borderColor: "#4a90e2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <Bell className="me-3 mt-1" size={20} style={{ color: "#4a90e2" }} />
                        <div style={{ width: "100%" }}>
                          <small className="text-muted d-block">Phone Number</small>
                          <input
                            type="text"
                            className="form-control"
                            value={teacherData.phone}
                            onChange={(e) =>
                              setTeacherData({
                                ...teacherData,
                                phone: e.target.value,
                              })
                            }
                            style={{ borderColor: "#4a90e2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="d-flex align-items-start">
                        <Book className="me-3 mt-1" size={20} style={{ color: "#4a90e2" }} />
                        <div style={{ width: "100%" }}>
                          <small className="text-muted d-block">Subject</small>
                          <input
                            type="text"
                            className="form-control"
                            value={teacherData.subject}
                            onChange={(e) =>
                              setTeacherData({
                                ...teacherData,
                                subject: e.target.value,
                              })
                            }
                            style={{ borderColor: "#4a90e2" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="d-flex align-items-start">
                        <FileText className="me-3 mt-1" size={20} style={{ color: "#4a90e2" }} />
                        <div style={{ width: "100%" }}>
                          <small className="text-muted d-block">Bio / About</small>
                          <textarea
                            className="form-control"
                            rows="4"
                            value={teacherData.bio}
                            onChange={(e) =>
                              setTeacherData({
                                ...teacherData,
                                bio: e.target.value,
                              })
                            }
                            style={{ borderColor: "#4a90e2" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Save Button - FIXED */}
                  <div className="text-end mt-4">
                    <button
                      className="btn px-4 py-2"
                      style={{
                        background: loading ? "#ccc" : "#4a90e2",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        cursor: loading ? "not-allowed" : "pointer"
                      }}
                      onClick={handleSaveProfile}
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save Changes"}
                    </button>
                  </div>
                </div>

                {/* Grades You Teach */}
                <div className="mb-5">
                  <h3 className="fw-bold mb-4" style={{ color: "#1a2332", borderBottom: "3px solid #4a90e2", paddingBottom: "10px" }}>
                    Grades You Teach
                  </h3>
                  
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    {/* Grade 6 - Always shown */}
                    <span 
                      className="badge px-4 py-2 rounded-pill"
                      style={{ 
                        fontSize: "1rem", 
                        fontWeight: "500",
                        background: "#e3f2fd",
                        color: "#1a2332"
                      }}
                    >
                      Grade 6
                    </span>
                    
                    {grades.map((grade, index) => (
                      <div key={index} className="d-flex align-items-center">
                        <span 
                          className="badge px-4 py-2 rounded-pill"
                          style={{ 
                            fontSize: "1rem", 
                            fontWeight: "500",
                            background: "#e3f2fd",
                            color: "#1a2332"
                          }}
                        >
                          {grade}
                        </span>
                        <button
                          className="btn btn-link text-danger p-0 ms-2"
                          onClick={() => handleDeleteGrade(index)}
                          style={{ fontSize: "0.8rem", textDecoration: "none" }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                    
                    {!showAddGrade ? (
                      <button
                        className="btn rounded-pill px-4"
                        style={{
                          background: "#4a90e2",
                          color: "white",
                          border: "none"
                        }}
                        onClick={() => setShowAddGrade(true)}
                      >
                        <span className="me-2">+</span> Add Grade
                      </button>
                    ) : (
                      <div className="d-flex align-items-center gap-2">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Enter grade (e.g., Grade 12)"
                          value={newGrade}
                          onChange={(e) => setNewGrade(e.target.value)}
                          style={{ width: "200px" }}
                        />
                          <button
    type="button"
    className="btn"
    style={{
      background: "#28a745",
      color: "white",
      border: "none",
      borderRadius: "8px",
      padding: "8px 20px"
    }}
    onClick={handleSaveProfile}
  >
    Save Changes
  </button>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => {
                            setShowAddGrade(false);
                            setNewGrade("");
                          }}
                        >
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Weekly Class Schedule */}
                <div className="mb-4">
                  <h3 className="fw-bold mb-4" style={{ color: "#1a2332", borderBottom: "3px solid #4a90e2", paddingBottom: "10px" }}>
                    Weekly Class Schedule
                  </h3>
                  
                  <div className="table-responsive">
                    <table className="table table-hover table-bordered">
                      <thead style={{ background: "#1a2332", color: "white" }}>
                        <tr>
                          <th style={{ padding: "12px" }}>Day</th>
                          <th style={{ padding: "12px" }}>Time</th>
                          <th style={{ padding: "12px" }}>Grade</th>
                          <th style={{ padding: "12px" }}>Fee</th>
                          <th style={{ padding: "12px" }}>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {schedule.map((item) => (
                          <tr key={item._id || item.id}>
                            <td style={{ padding: "12px" }}><strong style={{ color: "#1a2332" }}>{item.day}</strong></td>
                            <td style={{ padding: "12px" }}>{item.time}</td>
                            <td style={{ padding: "12px" }}>{item.grade}</td>
                            <td style={{ padding: "12px" }}>{item.fee}</td>
                            <td style={{ padding: "12px" }}>
                              <button
                                className="btn btn-sm me-2"
                                style={{
                                  background: "#4a90e2",
                                  color: "white",
                                  border: "none"
                                }}
                                onClick={() => handleEditSchedule(item)}
                              >
                                Edit
                              </button>
                              <button
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDeleteSchedule(item._id || item.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Add More Classes Button */}
                  <div className="text-end mt-3">
                    <button
                      className="btn"
                      style={{
                        background: "#4a90e2",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        padding: "10px 20px",
                        fontWeight: "600",
                      }}
                      onClick={handleAddSchedule}
                    >
                      + Add More Classes
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Schedule Modal */}
      {showEditModal && editingSchedule && (
        <div 
          className="modal show d-block" 
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 2000 }}
          onClick={() => {
            setShowEditModal(false);
            setEditingSchedule(null);
          }}
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header" style={{ background: "#1a2332", color: "white" }}>
                <h5 className="modal-title">Edit Schedule</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => {
                    setShowEditModal(false);
                    setEditingSchedule(null);
                  }}
                ></button>
              </div>
              <form onSubmit={handleUpdateSchedule}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label" style={{ color: "#1a2332", fontWeight: "600" }}>Day</label>
                    <select
                      className="form-select"
                      value={editingSchedule.day}
                      onChange={(e) => setEditingSchedule({
                        ...editingSchedule,
                        day: e.target.value
                      })}
                    >
                      <option>Monday</option>
                      <option>Tuesday</option>
                      <option>Wednesday</option>
                      <option>Thursday</option>
                      <option>Friday</option>
                      <option>Saturday</option>
                      <option>Sunday</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ color: "#1a2332", fontWeight: "600" }}>Time</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingSchedule.time}
                      onChange={(e) => setEditingSchedule({
                        ...editingSchedule,
                        time: e.target.value
                      })}
                      placeholder="e.g., 08:00 - 10:00"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ color: "#1a2332", fontWeight: "600" }}>Grade</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingSchedule.grade}
                      onChange={(e) => setEditingSchedule({
                        ...editingSchedule,
                        grade: e.target.value
                      })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label" style={{ color: "#1a2332", fontWeight: "600" }}>Fee</label>
                    <input
                      type="text"
                      className="form-control"
                      value={editingSchedule.fee}
                      onChange={(e) => setEditingSchedule({
                        ...editingSchedule,
                        fee: Number(e.target.value)
                      })}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setShowEditModal(false);
                      setEditingSchedule(null);
                    }}
                  >
                    Cancel
                  </button>
                <button
  type="button"
  className="btn"
  style={{
    background: "#4a90e2",
    color: "white",
    border: "none"
  }}
  onClick={handleSaveProfile}
>
  Save Changes
</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeacherMyProfile;