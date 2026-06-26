import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  Book,
  People,
  PatchQuestion,
  PersonCircle,
  GraphUp,
  PersonPlus,
  Upload,
  Clock,
  Pencil,
  Eye,
  Link45deg,
  PlayCircle,
  CameraVideo,
  X,
  Plus,
  Trash,
} from "react-bootstrap-icons";

import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

function TeacherClasses() {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editingClassId, setEditingClassId] = useState(null);
  const [classes, setClasses] = useState([
    {
      id: 1,
      subject: "Combined Mathematics",
      grade: "Grade 12",
      date: "29/03/2026",
      startTime: "4:00 PM",
      endTime: "6:00 PM",
      students: 32,
      views: 12,
      status: "upcoming",
    },
    {
      id: 2,
      subject: "Mathematics",
      grade: "Grade 10",
      date: "30/03/2026",
      startTime: "3:00 PM",
      endTime: "6:00 PM",
      students: 250,
      views: 12,
      status: "upcoming",
    },
    {
      id: 3,
      subject: "Combined Mathematics",
      grade: "Grade 12",
      date: "28/03/2026",
      startTime: "6:00 PM",
      endTime: "8:00 PM",
      students: 45,
      views: 12,
      status: "completed",
    },
  ]);

  const [formData, setFormData] = useState({
    subject: "",
    grade: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const [editFormData, setEditFormData] = useState({
    subject: "",
    grade: "",
    date: "",
    startTime: "",
    endTime: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditInputChange = (e) => {
    setEditFormData({
      ...editFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveClass = () => {
    if (!formData.subject || !formData.grade || !formData.date || !formData.startTime || !formData.endTime) {
      alert("Please fill in all fields");
      return;
    }

    const newClass = {
      id: Date.now(),
      subject: formData.subject,
      grade: formData.grade,
      date: formData.date,
      startTime: formData.startTime,
      endTime: formData.endTime,
      students: 0,
      views: 0,
      status: "upcoming",
    };

    setClasses([...classes, newClass]);
    setFormData({
      subject: "",
      grade: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    setShowForm(false);
    alert("Class scheduled successfully!");
  };

  const handleEditClass = (classItem) => {
    setEditingClassId(classItem.id);
    setEditFormData({
      subject: classItem.subject,
      grade: classItem.grade,
      date: classItem.date,
      startTime: classItem.startTime,
      endTime: classItem.endTime,
    });
    setShowEditForm(true);
  };

  const handleUpdateClass = () => {
    if (!editFormData.subject || !editFormData.grade || !editFormData.date || !editFormData.startTime || !editFormData.endTime) {
      alert("Please fill in all fields");
      return;
    }

    setClasses(
      classes.map((classItem) =>
        classItem.id === editingClassId
          ? {
              ...classItem,
              subject: editFormData.subject,
              grade: editFormData.grade,
              date: editFormData.date,
              startTime: editFormData.startTime,
              endTime: editFormData.endTime,
            }
          : classItem
      )
    );

    setEditFormData({
      subject: "",
      grade: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    setShowEditForm(false);
    setEditingClassId(null);
    alert("Class updated successfully!");
  };

  const handleCancelEdit = () => {
    setEditFormData({
      subject: "",
      grade: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    setShowEditForm(false);
    setEditingClassId(null);
  };

  const handleCancel = () => {
    setFormData({
      subject: "",
      grade: "",
      date: "",
      startTime: "",
      endTime: "",
    });
    setShowForm(false);
  };

  const handleDeleteClass = (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      setClasses(classes.filter((classItem) => classItem.id !== id));
    }
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        background: "#eef2f7",
        minHeight: "100vh",
      }}
    >
      <div className="row g-0">
        {/* Sidebar */}
        <div
          className="col-lg-3 col-xl-2 d-flex flex-column justify-content-between"
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
                style={{
                  width: "180px",
                }}
              />
            </div>

            <div className="px-3">
              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-dashboard")}
              >
                <HouseDoorFill className="me-3" />
                Dashboard
              </button>

              <button
                className="btn btn-light w-100 text-start fw-bold rounded-4 mb-3 p-3"
              >
                <Book className="me-3" />
                My Classes
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-students")}
              >
                <People className="me-3" />
                Students
              </button>

              <NavLink
                to="/teacher-quizzes"
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
              >
                <PatchQuestion className="me-3" />
                Quizzes
              </NavLink>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-materials")}
              >
                <Folder className="me-3" />
                Study Materials
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-payments")}
              >
                <CreditCard className="me-3" />
                Payments
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-results")}
              >
                <GraphUp className="me-3" />
                Results
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-profile")}
              >
                <PersonCircle className="me-3" />
                My Profile
              </button>

              <button
                className="btn btn-outline-light border-0 w-100 text-start rounded-4 mb-3 p-3"
                onClick={() => navigate("/teacher-settings")}
              >
                <Gear className="me-3" />
                Settings
              </button>
            </div>
          </div>

          {/* Logout */}
          <div className="p-3">
            <button className="btn btn-light w-100 rounded-4 fw-bold p-3">
              <BoxArrowRight className="me-2" />
              Logout
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="col">
          {/* Top Navbar */}
          <div className="bg-white shadow-sm px-5 py-3 d-flex justify-content-between align-items-center">
            <div>
              <h2 className="fw-bold mb-0">My Classes</h2>
              <small className="text-muted">Manage your online classes and recordings</small>
            </div>

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
                <h5 className="mb-0 fw-bold">User</h5>
                <small className="text-muted">Teacher</small>
              </div>
              <ChevronDown className="ms-3" />
            </div>
          </div>

          {/* Page Content */}
          <div
            className="container-fluid p-4"
            style={{
              background: "#eef2f7",
              minHeight: "calc(100vh - 80px)",
            }}
          >
            {/* Schedule New Class Form */}
            {showForm && (
              <div className="card border-0 shadow rounded-4 p-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold mb-0">Schedule New Class</h3>
                  <button
                    className="btn btn-outline-secondary rounded-pill"
                    onClick={handleCancel}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Subject</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enter subject name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Grade</label>
                    <select
                      className="form-select form-select-lg"
                      name="grade"
                      value={formData.grade}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Grade</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                      <option value="Grade 13">Grade 13</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Date</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">Start Time</label>
                    <input
                      type="time"
                      className="form-control form-control-lg"
                      name="startTime"
                      value={formData.startTime}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">End Time</label>
                    <input
                      type="time"
                      className="form-control form-control-lg"
                      name="endTime"
                      value={formData.endTime}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="col-12 d-flex gap-3 mt-4">
                    <button
                      className="btn btn-primary btn-lg rounded-pill px-5"
                      onClick={handleSaveClass}
                    >
                      <Plus className="me-2" />
                      Save Class
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-lg rounded-pill px-5"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Edit Class Form */}
            {showEditForm && (
              <div className="card border-0 shadow rounded-4 p-4 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h3 className="fw-bold mb-0">Edit Class</h3>
                  <button
                    className="btn btn-outline-secondary rounded-pill"
                    onClick={handleCancelEdit}
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-bold">Subject</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="subject"
                      value={editFormData.subject}
                      onChange={handleEditInputChange}
                      placeholder="Enter subject name"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Grade</label>
                    <select
                      className="form-select form-select-lg"
                      name="grade"
                      value={editFormData.grade}
                      onChange={handleEditInputChange}
                    >
                      <option value="">Select Grade</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                      <option value="Grade 10">Grade 10</option>
                      <option value="Grade 11">Grade 11</option>
                      <option value="Grade 12">Grade 12</option>
                      <option value="Grade 13">Grade 13</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label fw-bold">Date</label>
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="date"
                      value={editFormData.date}
                      onChange={handleEditInputChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">Start Time</label>
                    <input
                      type="time"
                      className="form-control form-control-lg"
                      name="startTime"
                      value={editFormData.startTime}
                      onChange={handleEditInputChange}
                    />
                  </div>

                  <div className="col-md-3">
                    <label className="form-label fw-bold">End Time</label>
                    <input
                      type="time"
                      className="form-control form-control-lg"
                      name="endTime"
                      value={editFormData.endTime}
                      onChange={handleEditInputChange}
                    />
                  </div>

                  <div className="col-12 d-flex gap-3 mt-4">
                    <button
                      className="btn btn-primary btn-lg rounded-pill px-5"
                      onClick={handleUpdateClass}
                    >
                      <Pencil className="me-2" />
                      Update Class
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-lg rounded-pill px-5"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Classes Management Section */}
            <div className="card border-0 shadow rounded-4 p-4 mb-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="fw-bold mb-0">Classes Management</h3>
                  <small className="text-muted">Manage your online classes and recordings</small>
                </div>
                <button
                  className="btn btn-warning rounded-pill px-4 fw-bold"
                  onClick={() => setShowForm(true)}
                >
                  + Schedule New Class
                </button>
              </div>

              {/* Upcoming Classes Section */}
              <h4 className="fw-bold mt-4 mb-3">Upcoming Classes</h4>
              {classes
                .filter((classItem) => classItem.status === "upcoming")
                .map((classItem) => (
                  <div key={classItem.id} className="card border-0 shadow-sm rounded-4 mb-3">
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <h5 className="fw-bold mb-1">{classItem.subject}</h5>
                          <div className="text-muted">
                            <span className="badge bg-primary me-2">{classItem.grade}</span>
                          </div>
                          <div className="text-muted">
                            <Calendar3 size={14} className="me-1" />
                            {classItem.date}
                          </div>
                          <div className="text-muted">
                            <Clock size={14} className="me-1" />
                            {classItem.startTime} - {classItem.endTime}
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="text-muted">
                            <People size={14} className="me-1" />
                            {classItem.students} students
                          </div>
                          <div className="text-muted">
                            <Eye size={14} className="me-1" />
                            {classItem.views} views
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="d-flex flex-wrap gap-2 justify-content-end">
                            <button
                              className="btn btn-warning btn-sm rounded-pill px-3"
                              onClick={() => handleEditClass(classItem)}
                            >
                              <Pencil className="me-1" />
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm rounded-pill px-3"
                              onClick={() => handleDeleteClass(classItem.id)}
                            >
                              <Trash className="me-1" />
                              Delete
                            </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                              <Link45deg className="me-1" />
                              Copy Link
                            </button>
                            <button
  className="btn btn-success"
  onClick={() => navigate("/teacher-start-class")}
>
  Start Class
</button>
                            <button className="btn btn-info btn-sm rounded-pill px-3 text-white">
                              <People className="me-1" />
                              View Attendance
                            </button>
                            <button
  className="btn btn-primary rounded-pill"
  onClick={() =>
    navigate("/teacher-upload-recording")
  }
>
  View Recording
</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              {/* Completed Classes Section */}
              <h4 className="fw-bold mt-4 mb-3">Completed</h4>
              {classes
                .filter((classItem) => classItem.status === "completed")
                .map((classItem) => (
                  <div key={classItem.id} className="card border-0 shadow-sm rounded-4 mb-3">
                    <div className="card-body p-4">
                      <div className="row align-items-center">
                        <div className="col-lg-3">
                          <h5 className="fw-bold mb-1">{classItem.subject}</h5>
                          <div className="text-muted">
                            <span className="badge bg-secondary me-2">{classItem.grade}</span>
                          </div>
                          <div className="text-muted">
                            <Calendar3 size={14} className="me-1" />
                            {classItem.date}
                          </div>
                          <div className="text-muted">
                            <Clock size={14} className="me-1" />
                            {classItem.startTime} - {classItem.endTime}
                          </div>
                        </div>
                        <div className="col-lg-2">
                          <div className="text-muted">
                            <People size={14} className="me-1" />
                            {classItem.students} students
                          </div>
                          <div className="text-muted">
                            <Eye size={14} className="me-1" />
                            {classItem.views} views
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="d-flex flex-wrap gap-2 justify-content-end">
                            <button
                              className="btn btn-warning btn-sm rounded-pill px-3"
                              onClick={() => handleEditClass(classItem)}
                            >
                              <Pencil className="me-1" />
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm rounded-pill px-3"
                              onClick={() => handleDeleteClass(classItem.id)}
                            >
                              <Trash className="me-1" />
                              Delete
                            </button>
                            <button className="btn btn-outline-secondary btn-sm rounded-pill px-3">
                              <Link45deg className="me-1" />
                              Copy Link
                            </button>
                            <button
  className="btn btn-success"
  onClick={() => navigate("/teacher-start-class")}
>
  Start Class
</button>
                            <button className="btn btn-info btn-sm rounded-pill px-3 text-white">
                              <People className="me-1" />
                              View Attendance
                            </button>
                            <button className="btn btn-primary btn-sm rounded-pill px-3">
                              <CameraVideo className="me-1" />
                              View Recording
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="card border-0 shadow rounded-4 p-4">
              <h4 className="fw-bold mb-4">Quick Actions</h4>
              <div className="row text-center">
                <div className="col-md-3">
                  <button 
                    className="btn btn-light shadow rounded-4 p-4 w-100"
                    onClick={() => setShowForm(true)}
                  >
                    <Calendar3 size={30} />
                    <h6 className="mt-3">Schedule Class</h6>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-light shadow rounded-4 p-4 w-100">
                    <PersonPlus size={30} />
                    <h6 className="mt-3">Add Student</h6>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-light shadow rounded-4 p-4 w-100">
                    <PatchQuestion size={30} />
                    <h6 className="mt-3">Create Quiz</h6>
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-light shadow rounded-4 p-4 w-100">
                    <Upload size={30} />
                    <h6 className="mt-3">Upload Materials</h6>
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

export default TeacherClasses;