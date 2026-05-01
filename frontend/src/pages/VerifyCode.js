import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image-removebg-preview.png";

function VerifyCode() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleVerify = () => {
    navigate("/reset-password", { state });
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">

        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center"
          style={{ background: "#0d1b5e", color: "white" }}>
           <img
            src={logo}
            alt="Logo"
            className="img-fluid"
            style={{ width: "500px" }}
           />
           
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">

          <div className="p-4 text-center" style={{ width: "350px", background: "#cfd3d7", borderRadius: "25px" }}>
            <h5>Check your email</h5>

            <div className="d-flex justify-content-center gap-2 my-3">
              {[1,2,3,4].map(i => (
                <input key={i} className="form-control text-center" style={{ width: "50px" }} maxLength="1" />
              ))}
            </div>

            <button className="btn btn-warning w-100" onClick={handleVerify}>
              Verify Code
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default VerifyCode;