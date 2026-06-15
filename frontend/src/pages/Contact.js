import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaGlobe,
  FaUser
} from "react-icons/fa";

function Contact() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "linear-gradient(to bottom,#001a70,#0033cc)",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}

      <nav
  className="navbar navbar-expand-lg"
  style={{
    background: "#f2f2f2",
    height: "70px"
  }}
>
  <div className="container">

    <div className="navbar-nav">

      <button
        className="btn btn-link text-dark text-decoration-none me-3"
        onClick={() => navigate("/")}
      >
        Home
      </button>

     <NavLink
  to="/contact"
  className={({ isActive }) =>
    isActive
      ? "btn btn-outline-dark rounded-0 me-3"
      : "btn btn-link text-dark text-decoration-none me-3"
  }
>
  Contact
</NavLink>

      <button
        className="btn btn-link text-dark text-decoration-none me-3"
        onClick={() => navigate("/ourlecturers")}
      >
        Our Lecturers
      </button>

      <button
        className="btn btn-link text-dark text-decoration-none"
        onClick={() => navigate("/timetable")}
      >
        Timetable
      </button>

    </div>

    <div className="ms-auto">

      <button
        className="btn btn-dark me-3 px-4"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

      <button
        className="btn btn-dark px-4"
        onClick={() => navigate("/register")}
      >
        Register
      </button>

    </div>

  </div>
</nav>

      {/* Heading */}

      <div className="container text-center text-white mt-4">

        <h1
          className="fw-bold"
          style={{ fontSize: "70px" }}
        >
          Contact Us
        </h1>

        <h3 className="fw-normal mt-3">
          We're here to help you on your learning journey.
        </h3>

        <div
          className="mx-auto mt-3"
          style={{
            width: "90px",
            height: "4px",
            background: "#ffb000",
          }}
        ></div>

      </div>

      {/* Main Section */}

      <div className="container mt-5 mb-5">

        <div className="row">

          {/* Left Card */}

          <div className="col-lg-4">

            <div
              className="card border-0 shadow-lg rounded-4 h-100"
            >
              <div className="card-body p-5">

                <h1
                  className="fw-bold"
                  style={{ color: "#0026a3" }}
                >
                  Get In Touch
                </h1>

                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    background: "#ffb000",
                    marginBottom: "20px",
                  }}
                ></div>

                <p
                  className="fw-semibold"
                  style={{ color: "#002b80" }}
                >
                  Have questions or need support?
                  Reach out to us anytime.
                  We are always happy to help!
                </p>

                <div className="d-flex align-items-center mt-5">

                  <div
                    className="rounded-4 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "#eef2ff",
                    }}
                  >
                    <FaPhoneAlt
                      size={35}
                      color="#0026a3"
                    />
                  </div>

                  <div className="ms-4">

                    <h4
                      className="fw-bold"
                      style={{ color: "#0026a3" }}
                    >
                      Phone Number
                    </h4>

                    <h4>0112 820 095</h4>
                    <h4>0112 820 096</h4>

                  </div>

                </div>

                <div className="d-flex align-items-center mt-5">

                  <div
                    className="rounded-4 d-flex justify-content-center align-items-center"
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "#eef2ff",
                    }}
                  >
                    <FaEnvelope
                      size={35}
                      color="#0026a3"
                    />
                  </div>

                  <div className="ms-4">

                    <h4
                      className="fw-bold"
                      style={{ color: "#0026a3" }}
                    >
                      Email Address
                    </h4>

                    <h5>rotary.rihe@gmail.com</h5>

                  </div>

                </div>

                

              </div>

            </div>

          </div>

          {/* Right Card */}

          <div className="col-lg-8 mt-4 mt-lg-0">

            <div className="card border-0 shadow-lg rounded-4">

              <div className="card-body p-5">

                <h1
                  className="fw-bold"
                  style={{ color: "#0026a3" }}
                >
                  Send Us a Message
                </h1>

                <div className="row mt-4">

                  <div className="col-md-6 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Your Address *
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Address"
                    />

                  </div>

                  <div className="col-md-6 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Your Email *
                    </label>

                    <input
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="Enter your Email"
                    />

                  </div>

                  <div className="col-12 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Name *
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter your Name"
                    />

                  </div>

                  <div className="col-12 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Subject *
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Subject"
                    />

                  </div>

                  <div className="col-12 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Teacher Name
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Teacher Name"
                    />

                  </div>

                  <div className="col-12 mb-4">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Telephone No
                    </label>

                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Enter Telephone No"
                    />

                  </div>

                  <div className="col-12">

                    <label
                      className="fw-bold mb-2"
                      style={{ color: "#0026a3" }}
                    >
                      Message *
                    </label>

                    <textarea
                      rows="5"
                      className="form-control"
                      placeholder="Create a message here..."
                    ></textarea>

                  </div>

                </div>

                <div className="text-center mt-5">

                  <button
                    className="btn btn-primary btn-lg px-5 rounded-3"
                    style={{
                      background: "#0026a3",
                      minWidth: "320px",
                    }}
                  >
                    <FaPaperPlane className="me-2" />
                    Send Message
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <div
        className="py-4"
        style={{
          background: "#001a70",
        }}
      >

        <div className="container">

          <div className="row align-items-center text-center text-white">

            <div className="col-lg-3 mb-3 mb-lg-0">

            <img
            src={logo}
            alt="logo"
            style={{ height: "80px" }}
            />

            </div>

            <div className="col-lg-3 mb-3 mb-lg-0">

              <FaPhoneAlt size={30} className="me-3" />

              <span className="fs-3">
                0112 820 095
              </span>

            </div>

            <div className="col-lg-3 mb-3 mb-lg-0">

              <FaEnvelope size={30} className="me-3" />

              <span className="fs-4">
                rotary.rihe@gmail.com
              </span>

            </div>

            <div className="col-lg-3">

              <button className="btn btn-primary rounded-circle me-2">
                <FaFacebookF />
              </button>

              <button className="btn btn-danger rounded-circle me-2">
                <FaInstagram />
              </button>

              <button className="btn btn-success rounded-circle me-2">
                <FaWhatsapp />
              </button>

              <button className="btn btn-danger rounded-circle me-2">
                <FaYoutube />
              </button>

              <button className="btn btn-primary rounded-circle">
                <FaGlobe />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Contact;