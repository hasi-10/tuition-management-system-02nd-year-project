import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";
import logo from "../assets/image-removebg-preview.png";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle register
  const handleRegister = async () => {
    // 🔐 Basic validation
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await API.post("/auth/register", form);

      console.log("Register response:", res);

      // ✅ Only redirect if success
      if (res.status === 200 || res.status === 201) {
        alert("Registered successfully! Please login.");

        // Redirect to login page
        navigate("/", { replace: true });
      }

    } catch (err) {
      console.error("Register error:", err);

      alert(
        err.response?.data?.message ||
        "Registration failed. Check backend."
      );
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
              width: "400px",
              background: "#cfd3d7",
              borderRadius: "25px",
            }}
          >

            {/* TOP BUTTONS */}
            <div className="d-flex justify-content-center mb-3">
              <button
                className="btn btn-secondary me-2"
                onClick={() => navigate("/")}
              >
                Login
              </button>

              <button className="btn btn-warning">
                Register
              </button>
            </div>

            {/* FORM */}
            <div className="row">
              <div className="col-6 mb-3">
                <input
                  name="name"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>

              <div className="col-6 mb-3">
                <input
                  type="date"
                  name="dob"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>

              <div className="col-6 mb-3">
                <input
                  name="phone"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>

              <div className="col-6 mb-3">
                <input
                  name="email"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Email"
                />
              </div>

              <div className="col-6 mb-3">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="col-6 mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            {/* BUTTONS */}
            <div className="d-flex justify-content-between mt-3">
              <button
                className="btn btn-warning px-4"
                onClick={handleRegister}
              >
                Register
              </button>

              <button
                className="btn btn-light px-4"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Register;