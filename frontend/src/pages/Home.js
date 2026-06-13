import React from "react";
import { useNavigate } from "react-router-dom";

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

            <button className="btn btn-link text-dark text-decoration-none">
              Contact
            </button>

            <button className="btn btn-link text-dark text-decoration-none">
              Our Lecturers
            </button>

            <button className="btn btn-link text-dark text-decoration-none">
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
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
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
                Explore a wide range of courses.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>📝</h1>

              <h4>Choose & Enroll</h4>

              <p className="text-muted">
                Select and enroll easily.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>📈</h1>

              <h4>Learn & Track</h4>

              <p className="text-muted">
                Study and monitor progress.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="card border-0 shadow-sm p-3 h-100">

              <h1>🏆</h1>

              <h4>Achieve</h4>

              <p className="text-muted">
                Complete courses successfully.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Footer */}

      <footer className="bg-primary text-white text-center py-5">

        <div className="container">

          <h2 className="fw-bold">Oguru Online Institute</h2>

          <p className="mb-1">📞 0112 820 095</p>

          <p>✉️ rotary.rihe@gmail.com</p>

        </div>

      </footer>

    </div>
  );
}

export default Home;