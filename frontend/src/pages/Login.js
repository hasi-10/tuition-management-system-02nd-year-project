import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await API.post("/auth/send-otp", { mobile });
      navigate("/verify", { state: { mobile } });
    } catch (err) {
      alert("Failed to send OTP");
    }
  };

  return (
    <div className="container-fluid vh-100 bg-light">
      <div className="row h-100">

        {/* LEFT IMAGE */}
        <div className="col-md-7 d-none d-md-block p-3">
          <img
            src="https://images.unsplash.com/photo-1738879348809-bbf70f1652e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="education"
            className="img-fluid w-100 h-100"
            style={{ objectFit: "cover", borderRadius: "20px" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div style={{ width: "350px" }}>

            {/* LOGO */}
            <div className="text-center mb-4">
              <h5 className="fw-bold"> O'guru</h5>
            </div>

            <h4 className="mb-2">Welcome to O'guru Online Education Center!</h4>
            <p className="text-muted mb-4">
              Please sign-in to your account and start the adventure
            </p>

            {/* INPUT */}
            <label className="form-label">Mobile</label>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="0777123456"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />

            {/* LOGIN BUTTON */}
            <button
              className="btn btn-warning w-100 mb-2 fw-semibold"
              onClick={handleLogin}
            >
              Login
            </button>

            {/* REGISTER BUTTON */}
            <button className="btn btn-secondary w-100">
              Register
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;