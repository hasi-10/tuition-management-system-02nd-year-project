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
import EditProfile from "./pages/teacher/EditProfile";
import TeacherClasses from "./pages/teacher/TeacherClasses";
import TeacherUploadRecording from "./pages/teacher/TeacherUploadRecording";
import ClassRecordings from "./pages/ClassRecordings";
import TeacherStartClass from "./pages/teacher/TeacherStartClass";
import StudentOnlineClass from "./pages/StudentOnlineClass";
import TeacherMyProfile from "./pages/teacher/TeacherMyProfile";
import CreateCourse from "./pages/teacher/CreateCourse";


import Settings from "./pages/Settings";
import AdminClassAttendance from "./pages/admin/AdminClassAttendance";
import AdminAttendanceDetails from "./pages/admin/AdminAttendanceDetails";
import AdminStudyMaterials from "./pages/admin/AdminStudyMaterials";
import StudyMaterialDetails from "./pages/admin/StudyMaterialDetails";
import AdminDeliveryTracking from "./pages/admin/AdminDeliveryTracking";
import DeliveryDetails from "./pages/admin/DeliveryDetails";
import AdminReports from "./pages/admin/AdminReports";
import AdminSettings from "./pages/admin/AdminSettings";







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

import MyTimetable from "./pages/MyTimetable";

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

<Route
  path="/studentdashboard"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentDashboard />
    </ProtectedRoute>
  }
/>


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
        <Route path="/class-recordings" element={<ClassRecordings />}/>
        <Route path="/student-online-class"element={<StudentOnlineClass />}/>
        






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






<Route path="/my-timetable"element={<MyTimetable/>}/>





        <Route
  path="/studentprofile"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/payment"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <Payment />
    </ProtectedRoute>
  }
/>
<Route
  path="/paymentsuccess"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <PaymentSuccess />
    </ProtectedRoute>
  }
/>
<Route
  path="/mycourses"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <MyCourses />
    </ProtectedRoute>
  }
/>
<Route
  path="/payment-options"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <PaymentOptions />
    </ProtectedRoute>
  }
/>
<Route
  path="/bank-slip-upload"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <BankSlipUpload />
    </ProtectedRoute>
  }
/>
<Route
  path="/allteachers"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <AllTeachers />
    </ProtectedRoute>
  }
/>
<Route
  path="/olteachers"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <OLTeachers />
    </ProtectedRoute>
  }
/>
<Route
  path="/alteachers"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <ALTeachers />
    </ProtectedRoute>
  }
/>
<Route
  path="/quiz-instructions"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizInstructions />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz-start"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizStart />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz-questions"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizQuestions />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz-results"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizResults />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz-review"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <QuizReview />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-dashboard"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-quizzes"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherQuizzes />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher/create-quiz"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <CreateQuiz />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher/view-quiz/:id"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherViewQuiz />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher/edit-quiz/:id"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <EditQuiz />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher/submissions/:quizId"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherSubmissions />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher/submission/:id"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <SubmissionDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/settings"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <Settings />
    </ProtectedRoute>
  }
/>
<Route 
  path="/admindashboard"
  element={
    <ProtectedRoute allowedRoles={["admin"]}> 
      <AdminDashboard />
    </ProtectedRoute> 
  } 
/>
<Route
  path="/adminteachers"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminTeachers />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-add-teacher"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminAddTeacher />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-teacher-profile"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminTeacherProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-edit-teacher"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminEditTeacher />
    </ProtectedRoute>
  }
/>
<Route
  path="/adminstudents"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminStudents />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-student-profile"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminStudentProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/adminpayments"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminPayments />
    </ProtectedRoute>
  }
/>
<Route
  path="/payment-details"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <PaymentDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/adminquizzes"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminQuizzes />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-quiz-details"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminQuizDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-classes"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherClasses />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-my-profile"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherMyProfile />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-upload-recording"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherUploadRecording />
    </ProtectedRoute>
  }
/>
<Route
  path="/teacher-start-class"
  element={
    <ProtectedRoute allowedRoles={["teacher"]}>
      <TeacherStartClass />
    </ProtectedRoute>
  }
/>
<Route
  path="/student-online-class"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentOnlineClass />
    </ProtectedRoute>
  }
/>
<Route
  path="/classrecordings"
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <ClassRecordings />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-class-attendance"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminClassAttendance />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-attendance-details"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminAttendanceDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-study-materials"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminStudyMaterials />
    </ProtectedRoute>
  }
/>
<Route
  path="/study-material-details"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <StudyMaterialDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-delivery-tracking"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDeliveryTracking />
    </ProtectedRoute>
  }
/>
<Route
  path="/delivery-details"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <DeliveryDetails />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-reports"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminReports />
    </ProtectedRoute>
  }
/>
<Route
  path="/admin-settings"
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminSettings />
    </ProtectedRoute>
  }
/>



<Route
  path="/teacher/create-course"
  element={<CreateCourse />}
/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;