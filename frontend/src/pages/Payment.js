import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import { olTeachers, alTeachers } from "../data/teachers";
import axios from "axios";

import {
  Person,
  Envelope,
  Telephone,
  Book,
  Mortarboard,
  CreditCard,
  Calendar,
  Lock,
  ArrowLeft,
  ArrowRight,
  CheckLg,
  Bank,
  Globe,
  Upload,
  Building,
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
    subject: "",
    grade: "", 

    paymentMethod: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",
    
    // Bank Deposit fields
    bankName: "",
    accountNumber: "",
    slipFile: null,

  });

  const [teacherList, setTeacherList] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState([]);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  // Load student profile data
  useEffect(() => {
    const loadStudentProfile = async () => {
      try {
        const email = localStorage.getItem("email");
        console.log("Stored Email:", email);
        const res = await API.get(`/profile/${email}`);
        console.log("Profile Response:", res.data);
        const profile = res.data.data;
        console.log("Profile object:", profile);

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

  // ============================================
  // UPDATED handlePayment FUNCTION
  // ============================================
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

      // Save payment
      const res = await API.post("/payment", paymentData);

      // Save to localStorage
      localStorage.setItem(
        "payment",
        JSON.stringify(res.data.data)
      );

      // Upload bank slip only for bank deposit
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
      console.log(error.response);
      console.log(error.response?.data);
      alert("Payment Failed");
    }
  };
  // ============================================
  // END OF UPDATED handlePayment FUNCTION
  // ============================================

  // Handle class type selection - NOW AUTO-DETECTS FROM GRADE
  const handleGradeChange = (e) => {
    const grade = e.target.value;
    let classType = "";
    
    // Auto-detect class type from grade
    if (grade) {
      const gradeNum = parseInt(grade);
      if (gradeNum >= 6 && gradeNum <= 11) {
        classType = "OL";
        setTeacherList(olTeachers);
      } else if (gradeNum >= 12 && gradeNum <= 13) {
        classType = "AL";
        setTeacherList(alTeachers);
      } else {
        setTeacherList([]);
      }
    } else {
      setTeacherList([]);
    }
    
    setFormData((prev) => ({
      ...prev,
      grade,
      classType,
      teacher: "",
      subject: "",
      amount: "",
    }));

    // Load teachers from API
    if (grade) {
      loadTeachers(`Grade ${grade}`);
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg,#00135c 0%,#00239c 55%,#0033cc 100%)",
        padding: "40px",
      }}
    >
      <div className="container">
        <h1
          className="text-center text-white fw-bold mb-5"
          style={{
            letterSpacing: "3px",
            fontSize: "55px",
          }}
        >
          PAYMENT
        </h1>
        <div className="row justify-content-center g-5">
          {/* New Left Card - Grade & Teachers */}
          <div className="col-lg-5">
            <div
              className="p-4"
              style={{
                background:"rgba(255,255,255,0.15)",
                backdropFilter:"blur(18px)",
                borderRadius:"35px",
              }}
            >
              <h3 className="text-white fw-bold mb-4">
                Select Grade
              </h3>
              <select
                className="form-select form-select-lg mb-5"
                name="grade"
                value={formData.grade}
                onChange={(e) => {
                  handleGradeChange(e);
                }}
              >
                <option value="">Choose Grade</option>
                <option value="6">Grade 6</option>
                <option value="7">Grade 7</option>
                <option value="8">Grade 8</option>
                <option value="9">Grade 9</option>
                <option value="10">Grade 10</option>
                <option value="11">Grade 11</option>
                <option value="12">Grade 12</option>
                <option value="13">Grade 13</option>
              </select>

              <h3 className="text-white fw-bold mb-4">
                Available Teachers
              </h3>
              <div className="row g-4">
                {teachers.map((teacher) => {
                  const selectedClass = teacher.schedule?.find(
                    (item) => item.grade === `Grade ${formData.grade}`
                  );
                  return (
                    <div className="col-md-6" key={teacher._id}>
                      <div className="card border-0 shadow h-100 rounded-4">
                        <div className="card-body text-center">
                          <div
                            className="rounded-circle bg-primary text-white d-inline-flex justify-content-center align-items-center mb-3"
                            style={{
                              width: "70px",
                              height: "70px",
                              fontSize: "28px",
                            }}
                          >
                            <Person />
                          </div>
                          <h5 className="fw-bold">
                            {teacher.name}
                          </h5>
                          <p className="text-muted mb-2">
                            {teacher.schedule
                              .filter(item => item.grade === formData.grade)
                              .map((item,index) => (
                                <div key={index}>
                                  <p className="mb-1">📚 {teacher.subject}</p>
                                  <p className="mb-1">📅 {item.day}</p>
                                  <p className="mb-1">🕒 {item.time}</p>
                                  <p className="fw-bold text-primary">💰 Rs.{item.fee}</p>
                                </div>
                              ))
                            }
                          </p>
                          <h4 className="text-primary">
                            Rs.{selectedClass?.fee || teacher.fee || 2000}
                          </h4>
                          <button
                            className="btn btn-primary rounded-pill mt-3"
                            onClick={() => {
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
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Selected Course Panel */}
          <div className="col-lg-3">
            <div
              className="card border-0 shadow-lg rounded-4 h-100"
              style={{
                background:"#fff",
              }}
            >
              <div className="card-body">
                <h3 className="fw-bold mb-4">Selected Course</h3>
                <hr/>
                <p>
                  <strong>Teacher</strong>
                  <br/>
                  {formData.teacher || "-"}
                </p>
                <p>
                  <strong>Subject</strong>
                  <br/>
                  {formData.subject || "-"}
                </p>
                <p>
                  <strong>Grade</strong>
                  <br/>
                  {formData.grade || "-"}
                </p>
                <hr/>
                <h5 className="fw-bold">Monthly Fee</h5>
                <h2 className="text-primary">Rs. {formData.amount || 0}</h2>
              </div>
            </div>
          </div>

          {/* Payment Card */}
          <div className="col-lg-4">
            <div
              className="p-4"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "35px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
              }}
            >
              <h3 className="text-white fw-bold mb-4">Payment Method</h3>
              <div className="row g-3 mb-4">
                {/* Credit Card */}
                <div className="col-12">
                  <div 
                    className={`card cursor-pointer ${formData.paymentMethod === "Credit Card" ? "border-primary border-3" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setFormData({...formData, paymentMethod: "Credit Card"})}
                  >
                    <div className="card-body d-flex align-items-center gap-3">
                      <CreditCard size={30} className="text-primary" />
                      <div>
                        <h6 className="mb-0 fw-bold">Credit Card</h6>
                        <small className="text-muted">Pay with credit card</small>
                      </div>
                      {formData.paymentMethod === "Credit Card" && (
                        <CheckLg className="text-primary ms-auto" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Debit Card */}
                <div className="col-12">
                  <div 
                    className={`card cursor-pointer ${formData.paymentMethod === "Debit Card" ? "border-primary border-3" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setFormData({...formData, paymentMethod: "Debit Card"})}
                  >
                    <div className="card-body d-flex align-items-center gap-3">
                      <CreditCard size={30} className="text-primary" />
                      <div>
                        <h6 className="mb-0 fw-bold">Debit Card</h6>
                        <small className="text-muted">Pay using Visa / MasterCard debit card</small>
                      </div>
                      {formData.paymentMethod === "Debit Card" && (
                        <CheckLg className="text-primary ms-auto" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Bank Deposit */}
                <div className="col-12">
                  <div 
                    className={`card cursor-pointer ${formData.paymentMethod === "Bank Deposit" ? "border-primary border-3" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setFormData({...formData, paymentMethod: "Bank Deposit"})}
                  >
                    <div className="card-body d-flex align-items-center gap-3">
                      <Bank size={30} className="text-success" />
                      <div>
                        <h6 className="mb-0 fw-bold">Bank Deposit</h6>
                        <small className="text-muted">Pay via bank transfer</small>
                      </div>
                      {formData.paymentMethod === "Bank Deposit" && (
                        <CheckLg className="text-success ms-auto" size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Online Banking */}
                <div className="col-12">
                  <div 
                    className={`card cursor-pointer ${formData.paymentMethod === "Online Banking" ? "border-primary border-3" : ""}`}
                    style={{ cursor: "pointer" }}
                    onClick={() => setFormData({...formData, paymentMethod: "Online Banking"})}
                  >
                    <div className="card-body d-flex align-items-center gap-3">
                      <Globe size={30} className="text-info" />
                      <div>
                        <h6 className="mb-0 fw-bold">Online Banking</h6>
                        <small className="text-muted">Pay via online banking</small>
                      </div>
                      {formData.paymentMethod === "Online Banking" && (
                        <CheckLg className="text-info ms-auto" size={20} />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Details - Shows for both Credit Card and Debit Card */}
              {(
                formData.paymentMethod === "Credit Card" ||
                formData.paymentMethod === "Debit Card"
              ) && (
                <div>
                  <h3 className="text-white fw-bold mb-4">Card Details</h3>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <CreditCard />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="**** **** **** ****"
                      value={formData.cardNumber}
                      onChange={(e) => {
                        let value = e.target.value
                          .replace(/\s/g, "")
                          .replace(/[^0-9]/gi, "")
                          .substring(0, 16);
                        let formatted = value.match(/.{1,4}/g)?.join(" ") || "";
                        setFormData({
                          ...formData,
                          cardNumber: formatted,
                        });
                      }}
                    />
                  </div>
                  <div className="row">
                    <div className="col-8 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <Calendar />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM/YY"
                          name="expiry"
                          value={formData.expiry}
                          onChange={(e) => {
                            let value = e.target.value
                              .replace(/\D/g, "")
                              .substring(0, 4);
                            if (value.length > 2) {
                              value = value.substring(0, 2) + "/" + value.substring(2);
                            }
                            setFormData({
                              ...formData,
                              expiry: value,
                            });
                          }}
                          maxLength="5"
                        />
                      </div>
                    </div>
                    <div className="col-4 mb-3">
                      <div className="input-group">
                        <span className="input-group-text">
                          <Lock />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="CVV"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bank Deposit Details */}
              {formData.paymentMethod === "Bank Deposit" && (
                <div>
                  <h3 className="text-white fw-bold mb-4">Bank Details</h3>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <Building />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bank Name"
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <CreditCard />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Account Number"
                      name="accountNumber"
                      value={formData.accountNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <Upload />
                    </span>
                    <input
                      type="file"
                      className="form-control"
                      accept="image/*,.pdf"
                      onChange={handleFileChange}
                    />
                  </div>
                </div>
              )}

              {/* Online Banking Details */}
              {formData.paymentMethod === "Online Banking" && (
                <div>
                  <h3 className="text-white fw-bold mb-4">Online Banking</h3>
                  <div className="alert alert-info">
                    You will be redirected to your bank's payment gateway to complete the transaction.
                  </div>
                </div>
              )}

              <hr className="my-4" style={{ borderColor: "rgba(255,255,255,0.3)" }} />

              {/* Total and Pay Button */}
              <div className="text-white">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="fw-bold mb-0">TOTAL</h4>
                  <h2 className="fw-bold mb-0">Rs. {formData.amount || 0}</h2>
                </div>
                <button
                  className="btn btn-light fw-bold w-100 py-3 rounded-pill"
                  onClick={handlePayment}
                  disabled={!formData.amount || !formData.paymentMethod}
                >
                  PAY NOW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end mt-4">
          <button
            className="btn btn-outline-secondary rounded-pill px-4"
            onClick={() => navigate("/payment-options")}
          >
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;