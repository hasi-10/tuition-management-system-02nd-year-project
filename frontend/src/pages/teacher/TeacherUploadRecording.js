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
  Upload,
  Clock,
  ArrowLeft,
  PlayCircle,
  FileEarmark,
  CheckCircle,
  XCircle,
} from "react-bootstrap-icons";

import logo from "../../assets/image-removebg-preview.png";
import profile from "../../assets/profile.png";

function UploadRecording() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    subject: "Combined Mathematics",
    grade: "Grade 12",
    date: "29/03/2026",
    startTime: "04:00 PM",
    endTime: "06:00 PM",
    topic: "Functions - Introduction",
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (2GB limit)
      if (file.size > 2 * 1024 * 1024 * 1024) {
        alert("File size exceeds 2GB limit. Please choose a smaller file.");
        return;
      }
      
      // Check file type
      const validTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo'];
      if (!validTypes.includes(file.type)) {
        alert("Please upload a valid video file (MP4, MOV, AVI)");
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a video file to upload.");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleCancel = () => {
    if (window.confirm("Are you sure you want to cancel? Any unsaved progress will be lost.")) {
      setSelectedFile(null);
      setUploadProgress(0);
      setIsUploading(false);
      setUploadComplete(false);
      navigate("/teacher-classes");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    setIsUploading(false);
    setUploadComplete(false);
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
                onClick={() => navigate("/teacher-classes")}
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
                onClick={() => navigate("/teacher-my-profile")}
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
              <h2 className="fw-bold mb-0">Upload Class Recording</h2>
              <small className="text-muted">
                Dashboard &gt; My Classes &gt; Upload Recording
              </small>
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
            {/* Breadcrumb */}
            <div className="mb-4">
              <button
                className="btn btn-outline-secondary rounded-pill px-4"
                onClick={() => navigate("/teacher-classes")}
              >
                <ArrowLeft className="me-2" />
                Back to Classes
              </button>
            </div>

            <div className="row">
              {/* Left Column - Form */}
              <div className="col-lg-8">
                <div className="card border-0 shadow rounded-4 p-4">
                  <h3 className="fw-bold mb-4">Upload Class Recording</h3>
                  <p className="text-muted mb-4">
                    Add details and upload the recording for your class
                  </p>

                  <h5 className="fw-bold mb-3">Class Details</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        Subject Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label fw-bold">
                        Grade / Class <span className="text-danger">*</span>
                      </label>
                      <select
                        className="form-select form-select-lg"
                        name="grade"
                        value={formData.grade}
                        onChange={handleInputChange}
                      >
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
                      <label className="form-label fw-bold">
                        Date <span className="text-danger">*</span>
                      </label>
                      <input
                        type="date"
                        className="form-control form-control-lg"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-bold">
                        Start Time <span className="text-danger">*</span>
                      </label>
                      <input
                        type="time"
                        className="form-control form-control-lg"
                        name="startTime"
                        value={formData.startTime}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-md-3">
                      <label className="form-label fw-bold">
                        End Time <span className="text-danger">*</span>
                      </label>
                      <input
                        type="time"
                        className="form-control form-control-lg"
                        name="endTime"
                        value={formData.endTime}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold">
                        Topic Covered <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="topic"
                        value={formData.topic}
                        onChange={handleInputChange}
                        placeholder="Enter topic covered in this class"
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold">
                        Description <span className="text-muted">(Optional)</span>
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        rows="3"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Add a short description about this recording..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Guidelines */}
              <div className="col-lg-4">
                <div className="card border-0 shadow rounded-4 p-4 mb-4">
                  <h5 className="fw-bold mb-3">
                    <CheckCircle className="me-2 text-success" />
                    Recording Guidelines
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <CheckCircle size={16} className="me-2 text-success" />
                      Upload clear and high quality videos
                    </li>
                    <li className="mb-2">
                      <CheckCircle size={16} className="me-2 text-success" />
                      Recommended format: MP4
                    </li>
                    <li className="mb-2">
                      <CheckCircle size={16} className="me-2 text-success" />
                      Maximum file size: 2GB
                    </li>
                    <li className="mb-2">
                      <CheckCircle size={16} className="me-2 text-success" />
                      Ensure good audio quality
                    </li>
                    <li className="mb-2">
                      <CheckCircle size={16} className="me-2 text-success" />
                      Add relevant topic and description
                    </li>
                  </ul>
                </div>

                {/* Preview */}
                <div className="card border-0 shadow rounded-4 p-4">
                  <h5 className="fw-bold mb-3">Preview</h5>
                  {selectedFile ? (
                    <div className="text-center">
                      <video
                        src={URL.createObjectURL(selectedFile)}
                        controls
                        style={{
                          width: "100%",
                          maxHeight: "200px",
                          borderRadius: "10px",
                        }}
                      />
                      <p className="text-muted mt-2 small">{selectedFile.name}</p>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <PlayCircle size={48} className="text-muted" />
                      <p className="text-muted mt-2">No video uploaded yet</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Upload Section */}
            <div className="card border-0 shadow rounded-4 p-4 mt-4">
              <h5 className="fw-bold mb-3">Upload Recording</h5>
              
              <div
                className="border border-2 rounded-4 text-center p-5"
                style={{
                  borderStyle: "dashed",
                  borderColor: "#dee2e6",
                  background: "#f8f9fa",
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "#0d6efd";
                  e.currentTarget.style.background = "#e7f1ff";
                }}
                onDragLeave={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "#dee2e6";
                  e.currentTarget.style.background = "#f8f9fa";
                }}
                onDrop={(e) => {
                  e.preventDefault();
                  e.currentTarget.style.borderColor = "#dee2e6";
                  e.currentTarget.style.background = "#f8f9fa";
                  const file = e.dataTransfer.files[0];
                  if (file) {
                    handleFileChange({ target: { files: [file] } });
                  }
                }}
              >
                {uploadComplete ? (
                  <div>
                    <CheckCircle size={64} className="text-success mb-3" />
                    <h4 className="fw-bold text-success">Upload Complete!</h4>
                    <p className="text-muted">
                      Your recording has been successfully uploaded.
                    </p>
                    <button
                      className="btn btn-success rounded-pill px-4"
                      onClick={handleReset}
                    >
                      Upload Another File
                    </button>
                  </div>
                ) : isUploading ? (
                  <div>
                    <div className="spinner-border text-primary mb-3" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h4 className="fw-bold">Uploading...</h4>
                    <p className="text-muted">{uploadProgress}% complete</p>
                    <div className="progress" style={{ height: "10px" }}>
                      <div
                        className="progress-bar progress-bar-striped progress-bar-animated"
                        role="progressbar"
                        style={{ width: `${uploadProgress}%` }}
                        aria-valuenow={uploadProgress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <Upload size={48} className="text-muted mb-3" />
                    <h5 className="fw-bold">Drag and drop your video here</h5>
                    <p className="text-muted">or</p>
                    <input
                      type="file"
                      id="videoUpload"
                      className="d-none"
                      accept="video/*"
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="videoUpload"
                      className="btn btn-primary rounded-pill px-5"
                    >
                      Browse File
                    </label>
                    <p className="text-muted mt-3 small">
                      Supported formats: MP4, MOV, AVI (Max size: 2GB)
                    </p>
                    {selectedFile && (
                      <div className="alert alert-info mt-3 mb-0">
                        <FileEarmark className="me-2" />
                        Selected: <strong>{selectedFile.name}</strong>
                        <br />
                        <small>
                          Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                        </small>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="d-flex gap-3 justify-content-end mt-4">
                <button
                  className="btn btn-outline-secondary btn-lg rounded-pill px-5"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary btn-lg rounded-pill px-5"
                  onClick={handleUpload}
                  disabled={!selectedFile || isUploading || uploadComplete}
                >
                  <Upload className="me-2" />
                  {uploadComplete ? "Uploaded" : "Upload Recording"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadRecording;