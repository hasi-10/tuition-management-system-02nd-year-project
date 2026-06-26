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
import StudentDashboard from "./pages/StudentDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentProfile from "./pages/StudentProfile";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";
import MyCourses from "./pages/MyCourses";
import PaymentOptions from "./pages/PaymentOptions";
import BankSlipUpload from "./pages/BankSlipUpload";
import AllTeachers from "./pages/AllTeachers";
import OLTeachers from "./pages/OLTeachers";
import ALTeachers from "./pages/ALTeachers";
import TeacherProfile from "./pages/TeacherProfile";
import QuizInstructions from "./pages/QuizInstructions";
import QuizStart from "./pages/QuizStart";
import QuizQuestions from "./pages/QuizQuestions";
import QuizResults from "./pages/QuizResults";
import QuizReview from "./pages/QuizReview";
import TeacherDashboard from "./pages/teacher/TeacherDashboard";
import TeacherQuizzes from "./pages/teacher/TeacherQuizzes";
import CreateQuiz from "./pages/teacher/CreateQuiz";
import TeacherViewQuiz from "./pages/teacher/TeacherViewQuiz";
import EditQuiz from "./pages/teacher/EditQuiz";
import TeacherSubmissions from "./pages/teacher/TeacherSubmissions";
import SubmissionDetails from "./pages/teacher/SubmissionDetails";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminTeachers from "./pages/admin/AdminTeachers";
import AdminAddTeacher from "./pages/admin/AdminAddTeacher";
import AdminTeacherProfile from "./pages/admin/AdminTeacherProfile";
import AdminEditTeacher from "./pages/admin/AdminEditTeacher";
import AdminStudents from "./pages/admin/AdminStudents";
import AdminStudentProfile from "./pages/admin/AdminStudentProfile";
import AdminPayments from "./pages/admin/AdminPayments";
import PaymentDetails from "./pages/admin/PaymentDetails";
import AdminQuizzes from "./pages/admin/AdminQuizzes";
import AdminQuizDetails from "./pages/admin/AdminQuizDetails";


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
        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/studentprofile" element={<StudentProfile />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/payment-options" element={<PaymentOptions />} />
        <Route path="/bank-slip-upload" element={<BankSlipUpload />} />
        <Route path="/allteachers" element={<AllTeachers />} />
        <Route path="/olteachers" element={<OLTeachers />} />
        <Route path="/alteachers" element={<ALTeachers />} />
        <Route path="/teacherprofile" element={<TeacherProfile />} />
        <Route path="/quiz-instructions" element={<QuizInstructions />} />
        <Route path="/quiz-start" element={<QuizStart />} />
        <Route path="/quiz-questions" element={<QuizQuestions />} />
        <Route path="/quiz-results" element={<QuizResults />} />
        <Route path="/quiz-review" element={<QuizReview />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher-quizzes" element={<TeacherQuizzes />} />
        <Route path="/teacher/create-quiz" element={<CreateQuiz />} />
        <Route path="/teacher/view-quiz/:id" element={<TeacherViewQuiz />} />
        <Route path="/teacher/edit-quiz/:id" element={<EditQuiz />} />
        <Route path="/teacher/submissions/:quizId" element={<TeacherSubmissions />} />
        <Route path="/teacher/submission/:id" element={<SubmissionDetails />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/adminteachers" element={<AdminTeachers />} />
        <Route path="/admin-add-teacher" element={<AdminAddTeacher />} />
        <Route path="/admin-teacher-profile" element={<AdminTeacherProfile />} />
        <Route path="/admin-edit-teacher" element={<AdminEditTeacher />} />
        <Route path="/adminstudents" element={<AdminStudents />} />
        <Route path="/admin-student-profile" element={<AdminStudentProfile />} />
        <Route path="/adminpayments" element={<AdminPayments />} />
        <Route path="/payment-details" element={<PaymentDetails />} />
        <Route path="/adminquizzes" element={<AdminQuizzes />} />
        <Route path="/admin-quiz-details" element={<AdminQuizDetails />} />

        

        <Route
          path="/studentdashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;