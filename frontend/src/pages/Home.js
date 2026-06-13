import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 50px",
          background: "#f2f2f2",
        }}
      >
        <div>
          <button style={{ marginRight: "10px" }}>Home</button>
          <button style={{ marginRight: "10px" }}>Contact</button>
          <button style={{ marginRight: "10px" }}>Our Lecturers</button>
          <button>Timetable</button>
        </div>

        <div>
          <button
            onClick={() => navigate("/login")}
            style={{
              marginRight: "15px",
              background: "black",
              color: "white",
              padding: "10px 25px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            style={{
              background: "black",
              color: "white",
              padding: "10px 25px",
              border: "none",
              borderRadius: "8px",
            }}
          >
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          height: "500px",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Work Process */}
      <div style={{ textAlign: "center", padding: "60px" }}>
        <h5 style={{ color: "blue" }}>Our Successful</h5>
        <h1>Work Process</h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "50px",
          }}
        >
          <div>
            <h2>📚</h2>
            <h4>Browse Courses</h4>
            <p>Explore a wide range of courses.</p>
          </div>

          <div>
            <h2>📝</h2>
            <h4>Choose & Enroll</h4>
            <p>Select and enroll easily.</p>
          </div>

          <div>
            <h2>📈</h2>
            <h4>Learn & Track</h4>
            <p>Study and monitor progress.</p>
          </div>

          <div>
            <h2>🏆</h2>
            <h4>Achieve</h4>
            <p>Complete courses successfully.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#0d2c87",
          color: "white",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <h2>Oguru Online Institute</h2>
        <p>📞 0112 820 095</p>
        <p>✉️ rotary.rihe@gmail.com</p>
      </footer>

    </div>
  );
}

export default Home;