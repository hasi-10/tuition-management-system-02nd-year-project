import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import logo from "../assets/image-removebg-preview.png";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", {
  email,
  password,
});
      console.log(res.data);

localStorage.setItem("token", res.data.token);
localStorage.setItem("role", res.data.role);
localStorage.setItem("email", res.data.email);
localStorage.setItem("name", res.data.name);
localStorage.setItem("userId", res.data.id);

alert("Login successful");

const userRole = res.data.role;

if (userRole === "student") {
  navigate("/studentdashboard");
} else if (userRole === "teacher") {
  navigate("/teacher-dashboard");
} else if (userRole === "admin") {
  navigate("/admindashboard");
}


    } catch (err) {
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT SIDE */}
        <div
          className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
          style={{
            background: "linear-gradient(135deg, #0d1b5e, #020c2e)",
            color: "white",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "500px" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          
          <div
            className="p-4 shadow"
            style={{
              width: "350px",
              background: "#cfd3d7",
              borderRadius: "25px",
            }}
          >



            <p className="text-center small mb-3">
              Please sign-in to your account and start the adventure
            </p>

            {/* EMAIL */}
            <label>Email</label>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* PASSWORD */}
            <label>Password</label>
            <input
              type="password"
              className="form-control mb-2"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* FORGOT PASSWORD */}
            <div className="text-end mb-3">
              <small
                style={{ cursor: "pointer", color: "#0d6efd" }}
                onClick={() => navigate("/forgot-password")}
              >
                Forgot password?
              </small>
            </div>

            {/* LOGIN BUTTON */}
            <button
              className="btn btn-warning w-100 mb-2 fw-bold"
              onClick={handleLogin}
              style={{ borderRadius: "20px" }}
            >
              Login
            </button>

            {/* REGISTER BUTTON */}
            <button
              className="btn w-100 text-white"
              style={{
                background: "#3d3732",
                borderRadius: "20px",
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;