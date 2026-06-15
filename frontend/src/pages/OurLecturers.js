import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";
import lecturer from "../assets/lecturer.png";

import {
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaGlobe,
  FaChevronLeft,
  FaChevronRight,
  FaBookOpen,
  FaTrophy,
  FaGraduationCap,
  FaUser
} from "react-icons/fa";

function OurLecturers() {

  const navigate = useNavigate();

<button
  className="btn btn-outline-dark rounded-0 me-3"
  onClick={() => navigate("/ourlecturers")}
>
  Our Lecturers
</button>

  const lecturers = [
  {
    name: "Mr. Aruna Gunasekara",
    subject: "Buddhist Studies Lecturer",
    description:
      "Mr. Aruna Gunasekara, a graduate from the University of Sri Jayawardenapura and the Buddhist and Pali University of Sri Lanka.",
    experience: "17+",
    achievement: "13 Times",
    speciality: "Buddhist Culture",
    image: lecturer
  },

  {
    name: "Mr. Nimal Perera",
    subject: "Mathematics Lecturer",
    description:
      "Mr. Nimal Perera has more than 15 years of experience teaching Mathematics and has produced many district rank students.",
    experience: "15+",
    achievement: "10 Times",
    speciality: "Mathematics",
    image: lecturer
  },

  {
    name: "Mrs. Kumari Silva",
    subject: "Science Lecturer",
    description:
      "Mrs. Kumari Silva is an experienced Science lecturer with excellent results and student achievements.",
    experience: "12+",
    achievement: "8 Times",
    speciality: "Science",
    image: lecturer
  }
];

  const [current, setCurrent] = useState(0);

  return (

    <div
      style={{
        background: "#f7f7f7",
        minHeight: "100vh"
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
  <div
  className="container mt-5 mb-5"
  style={{
    maxWidth: "1320px"
  }}
>

    <div className="navbar-nav">

      <button
        className="btn btn-link text-dark text-decoration-none me-3"
        onClick={() => navigate("/")}
      >
        Home
      </button>

 <button
  className="btn btn-link text-dark text-decoration-none me-3"
  onClick={() => navigate("/contact")}
>
  Contact
</button>

<button
  className="btn btn-outline-dark rounded-0 me-3"
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

<div
  style={{
    zoom: "85%"
  }}
>

<div
  style={{
    transform: "scale(0.88)",
    transformOrigin: "top center"
  }}
></div>

      {/* Heading */}

      <div className="container text-center mt-5">

        <h1
          className="fw-bold"
          style={{
            color: "#00145f",
            fontSize: "70px"
          }}
        >
          Our Lecturers
        </h1>

        <div
          className="mx-auto"
          style={{
            width: "70px",
            height: "4px",
            background: "#ff9900"
          }}
        ></div>

        <h2
          className="fw-normal mt-4"
          style={{
            color: "#555"
          }}
        >
          Meet our experienced and dedicated lecturers
          who guide your learning journey.
        </h2>

      </div>

      {/* Main Card */}

      <div className="container mt-5 mb-5">

        <div
          className="card border-0 shadow-lg rounded-5"
        >

          <div className="card-body p-5">

            <div className="row align-items-center">

              {/* Left Image */}

              <div className="col-lg-5 text-center">

                <img
  src={lecturers[current].image}
  alt=""
  className="img-fluid rounded-4"
  style={{
    width: "320px"
  }}
/>

              </div>

              {/* Right Content */}

              <div className="col-lg-7">

                <div className="d-flex align-items-center">

                  <div
                    className="rounded-4 d-flex justify-content-center align-items-center"
                    style={{
                      width: "90px",
                      height: "90px",
                      background: "#0028a0"
                    }}
                  >

                    <FaUserGraduate
                      size={45}
                      color="white"
                    />

                  </div>

                  <div className="ms-4">

  <h1
    className="fw-bold"
    style={{
      color: "#00145f"
    }}
  >
    {lecturers[current].name}
  </h1>

  <h2
    style={{
      color: "#ff9900",
      fontWeight: "700"
    }}
  >
    {lecturers[current].subject}
  </h2>

</div>

                </div>

                <div
                  className="mt-4 mb-4"
                  style={{
                    width: "120px",
                    height: "4px",
                    background: "#ff9900"
                  }}
                ></div>

                                <p
                  className="mt-4"
                  style={{
                    fontSize: "28px",
                    color: "#1f1f1f",
                    lineHeight: "55px"
                  }}
                >
                {lecturers[current].description}
                </p>

                <p
                  style={{
                    fontSize: "28px",
                    color: "#1f1f1f",
                    lineHeight: "55px"
                  }}
                >
                  He proudly claims 17 years of experience in
                  teaching Buddhist Culture since 2003, while
                  working as a lecturer at Sri Lanka
                  Rupavahini Corporation.
                </p>

                <p
                  style={{
                    fontSize: "28px",
                    color: "#1f1f1f",
                    lineHeight: "55px"
                  }}
                >
                  His admirable teaching approach had benefited
                  to bring forth the 1st in the Island as well as
                  the 1st in the Colombo district for 13 times
                  consecutively.
                </p>

                {/* Achievement Section */}

                <div
                  className="mt-5 rounded-4 p-4"
                  style={{
                    background: "#edf3ff"
                  }}
                >

                  <div className="row text-center">

                    <div className="col-md-4 border-end">

                      <div className="d-flex justify-content-center align-items-center">

                        <FaGraduationCap
                          size={55}
                          color="#0030a8"
                        />

                        <div className="ms-3 text-start">

                          <h2
                            className="fw-bold"
                            style={{
                              color: "#0030a8"
                            }}
                          >
                            {lecturers[current].experience}
                          </h2>

                          <h5>Years Experience</h5>

                        </div>

                      </div>

                    </div>

                    <div className="col-md-4 border-end">

                      <div className="d-flex justify-content-center align-items-center">

                        <FaTrophy
                          size={55}
                          color="#0030a8"
                        />

                        <div className="ms-3 text-start">

                          <h2
                            className="fw-bold"
                            style={{
                              color: "#0030a8"
                            }}
                          >
                            {lecturers[current].achievement}
                          </h2>

                          <h5>No.1 Achievements</h5>

                        </div>

                      </div>

                    </div>

                    <div className="col-md-4">

                      <div className="d-flex justify-content-center align-items-center">

                        <FaBookOpen
                          size={55}
                          color="#0030a8"
                        />

                        <div className="ms-3 text-start">

                          <h2
                            className="fw-bold"
                            style={{
                              color: "#0030a8"
                            }}
                          >
                            Expert in
                          </h2>

                          <h5>{lecturers[current].speciality}</h5>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

            {/* Navigation Arrows */}

     <button
  className="btn rounded-circle shadow position-absolute"
  style={{
    left: "7%",
    top: "50%",
    width: "70px",
    height: "70px",
    background: "white"
  }}
  onClick={() =>
    setCurrent(
      current === 0
        ? lecturers.length - 1
        : current - 1
    )
  }
>
  <FaChevronLeft
    size={30}
    color="#0028a0"
  />
</button>

      <button
  className="btn rounded-circle shadow position-absolute"
  style={{
    right: "7%",
    top: "50%",
    width: "70px",
    height: "70px",
    background: "white"
  }}
  onClick={() =>
    setCurrent((prev) =>
      prev === lecturers.length - 1 ? 0 : prev + 1
    )
  }
>
  <FaChevronRight
    size={30}
    color="#0028a0"
  />
</button>

      {/* Slider Dots */}

      <div className="text-center mb-5">

        <span
          className="rounded-circle d-inline-block mx-2"
          style={{
            width: "18px",
            height: "18px",
            background: "#0030a8"
          }}
        ></span>

        <span
          className="rounded-circle d-inline-block mx-2"
          style={{
            width: "18px",
            height: "18px",
            background: "#d8d8d8"
          }}
        ></span>

        <span
          className="rounded-circle d-inline-block mx-2"
          style={{
            width: "18px",
            height: "18px",
            background: "#d8d8d8"
          }}
        ></span>

        <span
          className="rounded-circle d-inline-block mx-2"
          style={{
            width: "18px",
            height: "18px",
            background: "#d8d8d8"
          }}
        ></span>

      </div>

      {/* Footer */}

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
    </div>

  );

}

export default OurLecturers;

