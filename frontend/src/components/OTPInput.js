import { useRef } from "react";

function OTPInput({ length, setOTP }) {
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    inputs.current[index].value = value;

    let otp = "";
    inputs.current.forEach((input) => (otp += input.value || ""));
    setOTP(otp);

    if (value && index < length - 1) {
      inputs.current[index + 1].focus();
    }
  };






  
  return (
    <div className="d-flex justify-content-center gap-2">
      {Array(length)
        .fill(0)
        .map((_, i) => (
          <input
            key={i}
            maxLength="1"
            ref={(el) => (inputs.current[i] = el)}
            onChange={(e) => handleChange(e.target.value, i)}
            className="form-control text-center"
            style={{ width: "50px", height: "50px", fontSize: "20px" }}
          />
        ))}
    </div>
  );
}

export default OTPInput;