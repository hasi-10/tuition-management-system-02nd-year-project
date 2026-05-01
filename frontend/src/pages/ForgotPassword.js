import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";


function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleVerify = () => {
    // later connect backend
    navigate("/verify-code", { state: { email } });
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
          style={{ background: "#0d1b5e", color: "white" }}>
           <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "500px" }}
           />
        </div>

        {/* RIGHT */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">

          <div className="p-4" style={{ width: "350px", background: "#cfd3d7", borderRadius: "25px" }}>
            <h5>Forgot Password</h5>
            <p className="small">Enter your email to reset password</p>

            <input
              className="form-control mb-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-warning w-100" onClick={handleVerify}>
              Verify
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;