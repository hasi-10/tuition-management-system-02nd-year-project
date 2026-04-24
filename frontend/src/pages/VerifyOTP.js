import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import OTPInput from "../components/OTPInput";
import API from "../services/api";

function VerifyOTP() {
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = location.state?.mobile;

  const [otp, setOtp] = useState("");

  const handleVerify = async () => {
    try {
      const res = await API.post("/auth/verify-otp", {
        mobile,
        otp,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful");
      navigate("/");
    } catch (err) {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT IMAGE */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
            alt=""
            className="img-fluid h-100 w-100 object-fit-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div style={{ width: "350px" }}>

            <h4 className="mb-2">Verify your mobile</h4>
            <p className="text-muted mb-3">
              OTP sent to {mobile}
            </p>

            <OTPInput length={4} setOTP={setOtp} />

            <button
              className="btn btn-warning w-100 mt-4"
              onClick={handleVerify}
            >
              Verify my account
            </button>

            <button
              className="btn btn-secondary w-100 mt-2"
              onClick={() => navigate("/")}
            >
              Back to Login
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default VerifyOTP;