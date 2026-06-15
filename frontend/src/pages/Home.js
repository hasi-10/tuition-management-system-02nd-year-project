import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/banner.png";
import logo from "../assets/image-removebg-preview.png";


function Home() {
  const navigate = useNavigate();


  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-3">
        <div className="container">

          <div className="navbar-nav me-auto">

            <button className="btn btn-link text-dark text-decoration-none">
              Home
            </button>

         <button
  className="btn btn-link text-dark text-decoration-none"
  onClick={() => navigate("/contact")}
>
  Contact
</button>
           <button
  className="btn btn-link text-dark text-decoration-none"
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

          <div>

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

      {/* Hero Section */}

      <div
        className="w-100"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
        }}
      ></div>

      {/* Work Process */}

      <div className="container text-center py-5">

        <h5 className="text-primary">Our Successful</h5>

        <h1 className="fw-bold mb-5">Work Process</h1>

        <div className="row g-4">

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>📚</h1>

              <h4>Browse Courses</h4>

              <p className="text-muted">
                Explore a wide range of courses across various subjects tailored to your goals.


              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>📝</h1>

              <h4>Choose & Enroll</h4>

              <p className="text-muted">
                Select your desired course and easily enroll with a few simple steps.


              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>📈</h1>

              <h4>Learn & Track</h4>

              <p className="text-muted">
                Access engaging lessons, study at your own pace, and track your progress.


              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>🏆</h1>

              <h4>Achieve</h4>

              <p className="text-muted">
                Complete courses, earn certificates, and unlock new opportunities.


              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <footer
  style={{
    backgroundColor: "#0b2478",
    color: "white",
    padding: "40px 0",
  }}
>
  <div className="container">
    <div className="row align-items-center">

      {/* Logo */}
      <div className="col-md-4 text-center text-md-start mb-4 mb-md-0">
        <img
          src={logo}
          alt="Oguru Logo"
          style={{
            width: "260px",
            maxWidth: "100%",
          }}
        />     
      </div>

      {/* Contact Details */}
      <div className="col-md-8">
        <h3 className="fw-bold mb-3">
          📞 0112 820 095
        </h3>

        <h3 className="fw-bold mb-4">
          ✉️ rotary.rihe@gmail.com
        </h3>

        <hr
          style={{
            border: "1px solid white",
            opacity: "1",
          }}
        />
      </div>

    </div>
  </div>
</footer>

    </div>
  );
}

export default Home;