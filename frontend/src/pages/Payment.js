import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import axios from "axios";

import {
  Person,
  CreditCard,
  Calendar,
  Lock,
  CheckLg,
  Bank,
  Globe,
  Upload,
  Building,
  ArrowLeft,
  Wallet,
  Shield,
  ChevronRight,
} from "react-bootstrap-icons";

function Payment() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    classType: "",
    teacher: "",
    teacherName: "",
    subject: "",
    grade: "",     
    paymentMethod: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
    bankName: "",
    accountNumber: "",
    slipFile: null,
  });

  const [selectedTeacherId, setSelectedTeacherId] = useState(null);

  useEffect(() => {
    const loadStudentProfile = async () => {
      try {
        const email = localStorage.getItem("email");
        const res = await API.get(`/profile/${email}`);
        const profile = res.data.data;
        setFormData((prev) => ({
          ...prev,
          firstName: profile.fullName || "",
          lastName: "",
          email: profile.email || "",
          phone: profile.phone || "",
        }));
      } catch (error) {
        console.log("Error loading profile:", error);
      }
    };
    loadStudentProfile();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const loadTeachers = async (grade) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/teachers/grade/${grade}`
      );
      setTeachers(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      slipFile: e.target.files[0],
    });
  };

  const handlePayment = async () => {
    try {
      const paymentData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        teacher: formData.teacher,
        subject: formData.subject,
        grade: formData.grade,
        paymentMethod: formData.paymentMethod,
        amount: formData.amount,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber,
      };

      const res = await API.post("/payment", paymentData);
      localStorage.setItem("payment", JSON.stringify(res.data.data));

      if (formData.paymentMethod === "Bank Deposit") {
        const formDataObj = new FormData();
        formDataObj.append("email", formData.email);
        formDataObj.append("teacher", formData.teacher);
        formDataObj.append("subject", formData.subject);
        formDataObj.append("grade", formData.grade);
        formDataObj.append("bankName", formData.bankName);
        formDataObj.append("accountNumber", formData.accountNumber);
        formDataObj.append("slip", formData.slipFile);
        await API.post("/payment/upload-slip", formDataObj);
      }

      navigate("/paymentsuccess");
    } catch (error) {
      console.log(error);
      alert("Payment Failed");
    }
  };

  const handleGradeChange = (e) => {
    const grade = e.target.value;
    let classType = "";
    
    if (grade) {
      const gradeNum = parseInt(grade);
      if (gradeNum >= 6 && gradeNum <= 11) {
        classType = "OL";
      } else if (gradeNum >= 12 && gradeNum <= 13) {
        classType = "AL";
      }
    }
    
    setFormData((prev) => ({
      ...prev,
      grade,
      classType,
      teacher: "",
      subject: "",
      amount: "",
    }));
    setSelectedTeacherId(null);

    if (grade) {
      loadTeachers(grade);
    }
  };

  const paymentMethods = [
    { id: "Credit Card", icon: CreditCard, color: "#4f46e5", label: "Credit Card", desc: "Pay with credit card" },
    { id: "Debit Card", icon: CreditCard, color: "#059669", label: "Debit Card", desc: "Pay using Visa / MasterCard debit card" },
    { id: "Bank Deposit", icon: Bank, color: "#d97706", label: "Bank Deposit", desc: "Pay via bank transfer" },
    
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
      }}
    >
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav style={{ fontSize: "14px" }}>
            <span style={{ color: "#4f46e5", fontWeight: "600" }}>Payment</span>
            <span style={{ color: "#94a3b8", margin: "0 8px" }}>&gt;</span>
            <span style={{ color: "#94a3b8" }}>Home</span>
          </nav>
        </div>

        {/* Main Card */}
        <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
          <div className="card-body p-5">
            {/* Header */}
            <h2 className="fw-bold mb-4" style={{ color: "#0f172a" }}>
              💳 Payment
            </h2>

            <div className="row g-4">
              {/* Left Column - Grade & Teachers */}
              <div className="col-lg-5">
                <div className="p-3 rounded-3" style={{ background: "#f8fafc" }}>
                  <h6 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "15px" }}>
                    1. Select Grade
                  </h6>
                  <select
                    className="form-select mb-4"
                    name="grade"
                    value={formData.grade}
                    onChange={handleGradeChange}
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #e2e8f0",
                      padding: "10px 14px",
                      fontSize: "14px",
                    }}
                  >
                    <option value="">Choose Grade</option>
                    {[6,7,8,9,10,11,12,13].map((g) => (
                      <option key={g} value={g}>Grade {g}</option>
                    ))}
                  </select>

                  <h6 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "15px" }}>
                    Available Teachers
                  </h6>
                  
                  {teachers.length === 0 ? (
                    <div className="text-center py-4">
                      <p className="text-muted small mb-0">Please select a grade to see available teachers.</p>
                    </div>
                  ) : (
                    <div className="row g-2">
                      {teachers.map((teacher) => {
                        const selectedClass = teacher.schedule?.find(
                          (item) => item.grade === `Grade ${formData.grade}`
                        );
                        const isSelected = selectedTeacherId === teacher._id;
                        
                        return (
                          <div className="col-12" key={teacher._id}>
                            <div
                              className="p-3 rounded-3 d-flex align-items-center justify-content-between"
                              style={{
                                background: isSelected ? "#eef2ff" : "#ffffff",
                                border: isSelected ? "2px solid #4f46e5" : "1px solid #e2e8f0",
                                borderRadius: "10px",
                                cursor: "pointer",
                                transition: "all 0.2s",
                              }}
                              onClick={() => {
                                setSelectedTeacherId(teacher._id);
                                const selectedClass = teacher.schedule.find(
                                  item => item.grade === `Grade ${formData.grade}`
                                );
                                setFormData((prev) => ({
                                  ...prev,
                                  teacher: teacher.name,
                                  subject: teacher.subject,
                                  grade: prev.grade,
                                  amount: selectedClass ? selectedClass.fee : 0,
                                }));
                              }}
                            >
                              <div>
                                <div className="fw-bold" style={{ fontSize: "14px" }}>
                                  {teacher.name}
                                </div>
                                <div className="text-muted small">{teacher.subject}</div>
                              </div>
                              {selectedClass && (
                                <div className="text-end">
                                  <div className="fw-bold" style={{ color: "#4f46e5", fontSize: "14px" }}>
                                    Rs.{selectedClass.fee}
                                  </div>
                                  <div className="text-muted small">{selectedClass.day}</div>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Middle Column - Selected Course */}
              <div className="col-lg-3">
                <div className="p-3 rounded-3" style={{ background: "#f8fafc" }}>
                  <h6 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "15px" }}>
                    2. Selected Course
                  </h6>
                  
                  <div className="mb-3">
                    <div className="text-muted small">Teacher</div>
                    <div className="fw-bold" style={{ fontSize: "14px" }}>
                      {formData.teacher || "-"}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small">Subject</div>
                    <div className="fw-bold" style={{ fontSize: "14px" }}>
                      {formData.subject || "-"}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-muted small">Grade</div>
                    <div className="fw-bold" style={{ fontSize: "14px" }}>
                      {formData.grade || "-"}
                    </div>
                  </div>
                  
                  <hr className="my-3" />
                  
                  <div>
                    <div className="text-muted small">Monthly Fee</div>
                    <div className="fw-bold" style={{ color: "#4f46e5", fontSize: "24px" }}>
                      Rs. {formData.amount || 0}
                    </div>
                  </div>

                  {!formData.teacher && (
                    <div className="mt-3 text-center">
                      <p className="text-muted small mb-0">Select a grade and teacher to view course details.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Column - Payment */}
              <div className="col-lg-4">
                <div className="p-3 rounded-3" style={{ background: "#f8fafc" }}>
                  <h6 className="fw-bold mb-3" style={{ color: "#0f172a", fontSize: "15px" }}>
                    3. Payment Method
                  </h6>
                  
                  <div className="mb-3">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className="p-2 mb-2 rounded-3 d-flex align-items-center"
                        style={{
                          background: formData.paymentMethod === method.id ? "#ffffff" : "transparent",
                          border: formData.paymentMethod === method.id ? `2px solid ${method.color}` : "1px solid #e2e8f0",
                          borderRadius: "10px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                        }}
                        onClick={() => setFormData({...formData, paymentMethod: method.id})}
                      >
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{
                            width: "32px",
                            height: "32px",
                            background: formData.paymentMethod === method.id ? method.color : "#f1f5f9",
                            color: formData.paymentMethod === method.id ? "#ffffff" : "#64748b",
                          }}
                        >
                          <method.icon size={14} />
                        </div>
                        <div className="flex-grow-1">
                          <div className="fw-bold" style={{ fontSize: "13px" }}>
                            {method.label}
                          </div>
                          <div className="text-muted" style={{ fontSize: "11px" }}>
                            {method.desc}
                          </div>
                        </div>
                        {formData.paymentMethod === method.id && (
                          <CheckLg color={method.color} size={14} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Card Details */}
                  {(formData.paymentMethod === "Credit Card" || formData.paymentMethod === "Debit Card") && (
                    <div className="mb-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Card Number"
                          value={formData.cardNumber}
                          onChange={(e) => {
                            let value = e.target.value.replace(/\s/g, "").replace(/[^0-9]/gi, "").substring(0, 16);
                            let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
                            setFormData({ ...formData, cardNumber: formatted });
                          }}
                          style={{ borderRadius: "8px" }}
                        />
                      </div>
                      <div className="row g-2">
                        <div className="col-7">
                          <input
                            type="text"
                            className="form-control form-control-sm"
                            placeholder="MM/YY"
                            name="expiry"
                            value={formData.expiry}
                            onChange={(e) => {
                              let value = e.target.value.replace(/\D/g, "").substring(0, 4);
                              if (value.length > 2) {
                                value = value.substring(0, 2) + "/" + value.substring(2);
                              }
                              setFormData({ ...formData, expiry: value });
                            }}
                            maxLength="5"
                            style={{ borderRadius: "8px" }}
                          />
                        </div>
                        <div className="col-5">
                          <input
                            type="password"
                            className="form-control form-control-sm"
                            placeholder="CVV"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            maxLength="4"
                            style={{ borderRadius: "8px" }}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank Deposit */}
                  {formData.paymentMethod === "Bank Deposit" && (
                    <div className="mb-3">
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Bank Name"
                          name="bankName"
                          value={formData.bankName}
                          onChange={handleChange}
                          style={{ borderRadius: "8px" }}
                        />
                      </div>
                      <div className="mb-2">
                        <input
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Account Number"
                          name="accountNumber"
                          value={formData.accountNumber}
                          onChange={handleChange}
                          style={{ borderRadius: "8px" }}
                        />
                      </div>
                      <div>
                        <input
                          type="file"
                          className="form-control form-control-sm"
                          accept="image/*,.pdf"
                          onChange={handleFileChange}
                          style={{ borderRadius: "8px" }}
                        />
                        <small className="text-muted" style={{ fontSize: "10px" }}>
                          Upload payment slip
                        </small>
                      </div>
                    </div>
                  )}

                  {/* Online Banking */}
                  {formData.paymentMethod === "Online Banking" && (
                    <div className="alert alert-info py-2 small">
                      <Shield className="me-2" size={14} />
                      Redirecting to bank's secure gateway
                    </div>
                  )}

                  <hr className="my-3" />

                  {/* Total */}
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold" style={{ color: "#0f172a" }}>
                      Total
                    </span>
                    <span className="fw-bold" style={{ color: "#4f46e5", fontSize: "22px" }}>
                      Rs. {formData.amount || 0}
                    </span>
                  </div>

                  {/* Pay Now Button */}
                  <button
                    className="btn w-100 py-2 rounded-pill fw-bold"
                    style={{
                      background: "linear-gradient(135deg, #4f46e5, #6366f1)",
                      color: "#ffffff",
                      border: "none",
                      fontSize: "14px",
                    }}
                    onClick={handlePayment}
                    disabled={!formData.amount || !formData.paymentMethod}
                  >
                    <Wallet className="me-2" size={16} />
                    Pay Now
                  </button>

                  {/* Back Button */}
                  <button
                    className="btn btn-light w-100 mt-2 py-2 rounded-pill"
                    onClick={() => navigate("/payment-options")}
                    style={{
                      border: "1px solid #e2e8f0",
                      fontSize: "14px",
                    }}
                  >
                    <ArrowLeft className="me-2" size={14} />
                    Back
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

export default Payment;