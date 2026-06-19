import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

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
} from "react-bootstrap-icons";

function Payment() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    teacher: "",
    subject: "",
    grade: "",

    paymentMethod: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    amount: "",

  });
  useEffect(() => {

  loadStudentDetails();

}, []);

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };
  const handlePayment = async () => {

  try {

    const res = await API.post("/payment", {

      firstName: formData.firstName,

      lastName: formData.lastName,

      email: formData.email,

      phone: formData.phone,

      teacher: formData.teacher,

      subject: formData.subject,

      grade: formData.grade,

      paymentMethod: formData.paymentMethod,

      amount: formData.amount,

    });

    console.log(res.data);

    navigate("/paymentsuccess");

  } catch (error) {

    console.log(error);

    alert("Payment Failed");

  }

};

  const loadStudentDetails = async () => {

  try {

    const email = localStorage.getItem("email");

    const res = await API.get(`/profile/${email}`);

    const profile = res.data.data;

    const names = profile.fullName.split(" ");

    setFormData((prev) => ({

      ...prev,

      firstName: names[0] || "",

      lastName: names.slice(1).join(" "),

      email: profile.email,

      phone: profile.phone,

    }));

  } catch (error) {

    console.log(error);

  }

};


  return (

    <div

      className="container-fluid d-flex justify-content-center align-items-center"

      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(180deg,#00135c 0%,#00239c 55%,#0033cc 100%)",

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

          {/* Personal Details Card */}

          <div className="col-lg-5">

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

              <h3

                className="text-white fw-bold mb-4"

              >

                Personal Details

              </h3>

              <div className="row">

                <div className="col-6 mb-3">

                  <div className="input-group">

                    <span className="input-group-text">

                      <Person />

                    </span>

                   <input

type="text"

className="form-control"

name="firstName"

value={formData.firstName}

readOnly

/>

                  </div>

                </div>

                <div className="col-6 mb-3">

                  <div className="input-group">

                    <span className="input-group-text">

                      <Person />

                    </span>

                    <input

                      type="text"

                      className="form-control"

                      placeholder="Last Name"

                      name="lastName"

                      value={formData.lastName}

                      readOnly

                    />

                  </div>

                </div>

              </div>

              <div className="input-group mb-3">

                <span className="input-group-text">

                  <Envelope />

                </span>

                <input

                  type="email"

                  className="form-control"

                  placeholder="Email"

                  name="email"

                  value={formData.email}

                  readOnly

                />

              </div>

              <div className="input-group mb-3">

                <span className="input-group-text">

                  <Telephone />

                </span>

                <input

                  type="text"

                  className="form-control"

                  placeholder="Phone Number"

                  name="phone"

                  value={formData.phone}

                  readOnly

                />

              </div>

              <div className="input-group mb-3">

                <span className="input-group-text">

                  <Person />

                </span>

                <input

                  type="text"

                  className="form-control"

                  placeholder="Teacher Name"

                  name="teacher"

                  value={formData.teacher}

                  onChange={handleChange}

                />

              </div>

              <div className="input-group mb-3">

                <span className="input-group-text">

                  <Book />

                </span>

                <input

                  type="text"

                  className="form-control"

                  placeholder="Subject Name"

                  name="subject"

                  value={formData.subject}

                  onChange={handleChange}

                />

              </div>

              <div className="input-group mb-5">

                <span className="input-group-text">

                  <Mortarboard />

                </span>

                <input

                  type="text"

                  className="form-control"

                  placeholder="Grade"

                  name="grade"

                  value={formData.grade}

                  onChange={handleChange}

                />

              </div>

              <div className="text-center">

                <button

                  className="btn btn-light fw-bold px-5 py-2 rounded-pill"

                >

                  Next

                  <ArrowRight className="ms-2" />

                </button>

              </div>

            </div>

          </div>
                    {/* Payment Card */}

          <div className="col-lg-5">

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

              <h3 className="text-white fw-bold mb-4">

                Payment Method

              </h3>

              <div className="input-group mb-5">

                <span className="input-group-text">

                  <CreditCard />

                </span>

                <select

                  className="form-select"

                  name="paymentMethod"

                  value={formData.paymentMethod}

                  onChange={handleChange}

                >

                  <option value="">

                    Select Payment Method

                  </option>

                  <option>

                    Credit Card

                  </option>

                  <option>

                    Debit Card

                  </option>

                </select>

              </div>

              <h3 className="text-white fw-bold mb-4">

                Card Details

              </h3>

              <div className="input-group mb-3">

                <span className="input-group-text">

                  <CreditCard />

                </span>

                <input

                  type="text"

                  className="form-control"

                  placeholder="Card Number"

                  name="cardNumber"

                  value={formData.cardNumber}

                  onChange={handleChange}

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

                      placeholder="MM/YYYY"

                      name="expiry"

                      value={formData.expiry}

                      onChange={handleChange}

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

              <div className="input-group mb-5">

                <span className="input-group-text">

                  Rs.

                </span>

                <input

                  type="number"

                  className="form-control"

                  placeholder="Amount"

                  name="amount"

                  value={formData.amount}

                  onChange={handleChange}

                />

                <span className="input-group-text">

                  .00

                </span>

              </div>

              <div className="text-center">

               <button

className="btn btn-light fw-bold px-5 py-2 rounded-pill"

onClick={handlePayment}

>

Done

<CheckLg className="ms-2" />

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