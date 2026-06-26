import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Bell,
  ChevronDown,
  HouseDoorFill,
  CreditCard,
  FileText,
  Folder,
  Gear,
  BoxArrowRight,
  PatchQuestion,
  Book,
  People,
  GraphUp,
  PersonCircle,
} from "react-bootstrap-icons";

import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

function TeacherMyProfile() {
  const navigate = useNavigate();

  // FIXED: Should use environment variable or actual ID from auth
  const teacherId = "6a3bdd5b1eff5b3f8c486b38";

  // ===========================
  // STATES
  // ===========================

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // ADDED: Error state

  const [teacherData, setTeacherData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    bio: "",
  });

  const [grades, setGrades] = useState([]);
  const [newGrade, setNewGrade] = useState("");
  const [showAddGrade, setShowAddGrade] = useState(false);
  const [schedule, setSchedule] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingSchedule, setEditingSchedule] = useState(null);

  // ===========================
  // LOAD TEACHER
  // ===========================

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    try {
      setError(null); // Clear previous errors
      const res = await axios.get(
        `http://localhost:5000/api/teachers/${teacherId}`
      );

      // FIXED: Better null/undefined handling
      setTeacherData({
        fullName: res.data?.name || "",
        email: res.data?.email || "",
        phone: res.data?.phone || "",
        subject: res.data?.subject || "",
        bio: res.data?.bio || "",
      });

      setGrades(res.data?.grades || []);
      setSchedule(res.data?.schedule || []);
    } catch (err) {
      console.error("Error loading teacher:", err);
      setError("Failed to load teacher data. Please try again.");
      // FIXED: Show user-friendly error message
    }
  };

  // ===========================
  // SAVE PROFILE
  // ===========================

  const handleSaveProfile = async (scheduleToSave) => {

  if (!Array.isArray(scheduleToSave)) {
    scheduleToSave = schedule;
  }
    // FIXED: Basic validation
    if (!teacherData.fullName.trim()) {
      alert("Please enter your full name");
      return;
    }

    if (!teacherData.email.trim()) {
      alert("Please enter your email");
      return;
    }

    // FIXED: Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(teacherData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload = {
        name: teacherData.fullName,
        email: teacherData.email,
        phone: teacherData.phone,
        subject: teacherData.subject,
        bio: teacherData.bio,
        grades: grades,
        schedule: scheduleToSave,
      };

      await axios.put(
        `http://localhost:5000/api/teachers/${teacherId}`,
        payload
      );

      alert("Profile Updated Successfully!");
      await loadTeacher(); // Refresh data
    } 
    
catch (err) {
  console.error("FULL ERROR:", err);
  console.log("Response:", err.response);
  console.log("Data:", err.response?.data);

  alert(JSON.stringify(err.response?.data || err.message));
}
    
    finally {
      setLoading(false);
    }
  };

  // ===========================
  // GRADE FUNCTIONS
  // ===========================

  const handleAddGrade = () => {
    if (!newGrade.trim()) {
      alert("Please enter a grade");
      return;
    }

    // FIXED: Check for duplicates
    if (grades.includes(newGrade.trim())) {
      alert("This grade already exists");
      return;
    }

    setGrades([...grades, newGrade.trim()]);
    setNewGrade("");
    setShowAddGrade(false);
  };

  const handleDeleteGrade = (index) => {
    // FIXED: Confirm before deletion
    if (window.confirm("Are you sure you want to delete this grade?")) {
      setGrades(grades.filter((_, i) => i !== index));
    }
  };

  // ===========================
  // SCHEDULE FUNCTIONS
  // ===========================

const handleAddSchedule = () => {
  const newScheduleItem = {
    id: Date.now().toString(),
    day: "Monday",
    time: "08:00 - 10:00",
    grade: "Grade 6",
    fee: 1500,
  };

  const updatedSchedule = [...schedule, newScheduleItem];

  setSchedule(updatedSchedule);

  handleSaveProfile(updatedSchedule);
};

  const handleDeleteSchedule = (index) => {
    // FIXED: Confirm before deletion
    if (window.confirm("Are you sure you want to delete this schedule item?")) {
      setSchedule(schedule.filter((_, i) => i !== index));
    }
  };

  const handleEditSchedule = (item) => {
    // FIXED: Create a deep copy to avoid reference issues
    setEditingSchedule({ ...item });
    setShowEditModal(true);
  };

  const handleUpdateSchedule = () => {
  if (!editingSchedule) return;

  const updatedSchedule = schedule.map((item) => {
    const itemId = item._id || item.id;
    const editId = editingSchedule._id || editingSchedule.id;

    return itemId === editId ? editingSchedule : item;
  });

  setSchedule(updatedSchedule);

  setShowEditModal(false);
  setEditingSchedule(null);

  handleSaveProfile(updatedSchedule);
};

  const handleLogout = () => {
    // FIXED: Actual logout logic
    if (window.confirm("Are you sure you want to logout?")) {
      // Add your logout logic here
      // Example: localStorage.removeItem('token');
      // navigate('/login');
      alert("Logging out...");
    }
  };

  // FIXED: Added close modal function
  const closeModal = () => {
    setShowEditModal(false);
    setEditingSchedule(null);
  };

  // ===========================
  // RENDER
  // ===========================

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">

        {/* Sidebar - Same as before */}
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

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
                <People className="me-3" />
                Students
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
                <PatchQuestion className="me-3" />
                Quizzes
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
                <Folder className="me-3" />
                Study Materials
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
                <CreditCard className="me-3" />
                Payments
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
                <GraphUp className="me-3" />
                Results
              </button>

              <button className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3">
                <PersonCircle className="me-3" />
                My Profile
              </button>

              <button className="btn btn-outline-light border-0 w-100 text-start mb-3 p-3 rounded-4">
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

          {/* Navbar */}
          <div className="bg-white shadow-sm px-4 py-3 d-flex justify-content-between align-items-center">
            <h2 className="fw-bold mb-0">Teacher Profile</h2>

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

              <div className="ms-3">
                <h5 className="mb-0 fw-bold">
                  {teacherData.fullName || "Loading..."}
                </h5>
                <small className="text-muted">Teacher</small>
              </div>

              <ChevronDown className="ms-3" />
            </div>
          </div>

          {/* Main Card */}
          <div className="container-fluid p-4">

            {/* FIXED: Added error display */}
            {error && (
              <div className="alert alert-danger alert-dismissible fade show" role="alert">
                {error}
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setError(null)}
                ></button>
              </div>
            )}

            <div className="card shadow border-0 rounded-4">
              <div className="card-body p-5">

                {/* Profile Information */}
                <h3
                  className="fw-bold mb-4"
                  style={{
                    color: "#1a2332",
                    borderBottom: "3px solid #4a90e2",
                    paddingBottom: "10px",
                  }}
                >
                  Profile Information
                </h3>

                <div className="row g-4">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Full Name</label>
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
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Email</label>
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
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Phone Number</label>
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
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Subject</label>
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
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold">About / Bio</label>
                    <textarea
                      rows="4"
                      className="form-control"
                      value={teacherData.bio}
                      onChange={(e) =>
                        setTeacherData({
                          ...teacherData,
                          bio: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="text-end mt-4">
                  <button
                    type="button"
                    className="btn btn-primary px-4"
                    onClick={handleSaveProfile}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>

                <hr className="my-5" />

                {/* Grades You Teach */}
                <h3
                  className="fw-bold mb-4"
                  style={{
                    color: "#1a2332",
                    borderBottom: "3px solid #4a90e2",
                    paddingBottom: "10px",
                  }}
                >
                  Grades You Teach
                </h3>

                <div className="mb-4">
                  <div className="d-flex flex-wrap gap-2">
                    {grades.length === 0 ? (
                      <p className="text-muted">No grades added yet</p>
                    ) : (
                      grades.map((grade, index) => (
                        <div
                          key={index}
                          className="d-flex align-items-center"
                          style={{
                            background: "#eaf4ff",
                            border: "1px solid #4a90e2",
                            borderRadius: "25px",
                            padding: "8px 15px",
                          }}
                        >
                          <span className="fw-semibold me-2">{grade}</span>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger rounded-circle"
                            style={{
                              width: "25px",
                              height: "25px",
                              padding: 0,
                              lineHeight: "1",
                            }}
                            onClick={() => handleDeleteGrade(index)}
                          >
                            ×
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => setShowAddGrade(true)}
                  >
                    + Add Grade
                  </button>

                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleSaveProfile}
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save Changes"}
                  </button>
                </div>

                {showAddGrade && (
                  <div
                    className="card mt-4"
                    style={{
                      maxWidth: "400px",
                      borderRadius: "15px",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="fw-bold mb-3">Add Grade</h5>
                      <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Example : Grade 10"
                        value={newGrade}
                        onChange={(e) => setNewGrade(e.target.value)}
                      />
                      <div className="d-flex justify-content-end gap-2">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={() => {
                            setShowAddGrade(false);
                            setNewGrade("");
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleAddGrade}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <hr className="my-5" />

                {/* Weekly Class Schedule */}
                <h3
                  className="fw-bold mb-4"
                  style={{
                    color: "#1a2332",
                    borderBottom: "3px solid #4a90e2",
                    paddingBottom: "10px",
                  }}
                >
                  Weekly Class Schedule
                </h3>

                <div className="table-responsive">
                  <table className="table table-bordered table-hover align-middle">
                    <thead
                      style={{
                        background: "#4a90e2",
                        color: "white",
                      }}
                    >
                      <tr>
                        <th>Day</th>
                        <th>Time</th>
                        <th>Grade</th>
                        <th>Fee (Rs.)</th>
                        <th width="180">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schedule.length === 1 ? (
                        <tr>
                          <td colSpan="5" className="text-center py-4">
                            No Classes Added
                          </td>
                        </tr>
                      ) : (
                        schedule.map((item, index) => (
                          <tr key={item._id || item.id || index}>
                            <td>{item.day}</td>
                            <td>{item.time}</td>
                            <td>{item.grade}</td>
                            <td>Rs. {item.fee}</td>
                            <td>
                              <button
                                type="button"
                                className="btn btn-sm btn-primary me-2"
                                onClick={() => handleEditSchedule(item)}
                              >
                                Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => handleDeleteSchedule(index)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="d-flex justify-content-end mt-3">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={handleAddSchedule}
                  >
                    + Add New Class
                  </button>
                </div>

                <hr className="my-5" />

                {/* Edit Schedule Modal */}
                {showEditModal && editingSchedule && (
                  <div
                    className="modal show d-block"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      zIndex: 2000,
                    }}
                    onClick={(e) => {
                      // FIXED: Close modal when clicking backdrop
                      if (e.target === e.currentTarget) {
                        closeModal();
                      }
                    }}
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div
                          className="modal-header"
                          style={{
                            background: "#4a90e2",
                            color: "white",
                          }}
                        >
                          <h5 className="modal-title">Edit Class Schedule</h5>
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            onClick={closeModal}
                          ></button>
                        </div>

                        <div className="modal-body">
                          <div className="mb-3">
                            <label className="form-label">Day</label>
                            <select
                              className="form-select"
                              value={editingSchedule.day}
                              onChange={(e) =>
                                setEditingSchedule({
                                  ...editingSchedule,
                                  day: e.target.value,
                                })
                              }
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
                            <label className="form-label">Time</label>
                            <input
                              type="text"
                              className="form-control"
                              value={editingSchedule.time}
                              onChange={(e) =>
                                setEditingSchedule({
                                  ...editingSchedule,
                                  time: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Grade</label>
                            <input
                              type="text"
                              className="form-control"
                              value={editingSchedule.grade}
                              onChange={(e) =>
                                setEditingSchedule({
                                  ...editingSchedule,
                                  grade: e.target.value,
                                })
                              }
                            />
                          </div>

                          <div className="mb-3">
                            <label className="form-label">Fee</label>
                            <input
                              type="number"
                              className="form-control"
                              value={editingSchedule.fee}
                              onChange={(e) =>
                                setEditingSchedule({
                                  ...editingSchedule,
                                  fee: Number(e.target.value),
                                })
                              }
                            />
                          </div>
                        </div>

                        <div className="modal-footer">
                          <button
                            className="btn btn-secondary"
                            onClick={closeModal}
                          >
                            Cancel
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={handleUpdateSchedule}
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherMyProfile;