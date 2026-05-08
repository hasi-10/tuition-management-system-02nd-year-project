import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate(); // ✅ ADD THIS

  const handleUpdate = () => {
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    // 👉 Later connect backend here

    alert("Password Updated Successfully!");

    // ✅ REDIRECT TO LOGIN PAGE
    navigate("/");
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        {/* LEFT SIDE */}
        <div
          className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
          style={{ background: "#0d1b5e", color: "white" }}
        >
          <h2>O'guru Online</h2>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">

          <div
            className="p-4"
            style={{
              width: "350px",
              background: "#cfd3d7",
              borderRadius: "25px",
            }}
          >
            <h5>Set New Password</h5>

            <input
              type="password"
              className="form-control mb-2"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="password"
              className="form-control mb-3"
              placeholder="Confirm Password"
              onChange={(e) => setConfirm(e.target.value)}
            />

            <button
              className="btn btn-warning w-100"
              onClick={handleUpdate}
            >
              Update Password
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ResetPassword;