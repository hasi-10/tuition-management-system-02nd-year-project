import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import Login from "./pages/Login";
import OurLecturers from "./pages/OurLecturers";

import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyCode from "./pages/VerifyCode";
import ResetPassword from "./pages/ResetPassword";
import Contact from "./pages/Contact";  
import StudentProfile from "./pages/StudentProfile";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/ourlecturers" element={<OurLecturers />} />

        <Route path="/timetable" element={<Timetable />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />  
      </Routes>
    </BrowserRouter>
  );
}

export default App;