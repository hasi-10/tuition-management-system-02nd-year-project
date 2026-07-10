import { useNavigate } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import API from "../services/api";
import "../Styles/Calendar.css";
import StudentSidebar from "../components/StudentSlidebar";
import StudentProfileDropdown from "../components/StudentProfileDropdown";

import React from "react";
import {
  Bell,
  Calendar3,
  Clock,
  CheckCircleFill,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
  ChevronBarLeft,
  ChevronBarRight,
  ArrowRight,
  Stars,
  Mortarboard,
  Award,
  GraphUp,
  Book,
  People,
  Star,
} from "react-bootstrap-icons";

function StudentDashboard() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [student, setStudent] = useState({
    fullName: "",
    profileImage: "",
  });
  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(today.getDate());

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const email = localStorage.getItem("email");
      const res = await API.get(`/profile/${email}`);
      setStudent(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const todayDate = today.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const monthYear = today.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  // Stats Data
  const STATS = [
    { label: "Enrolled Courses", value: "6", change: "+2 this term", icon: Book, color: "#4f46e5" },
    { label: "Lessons Completed", value: "128", change: "+12 this week", icon: CheckCircleFill, color: "#0ea5e9" },
    { label: "Overall Progress", value: "74%", change: "+4% this week", icon: GraphUp, color: "#10b981" },
    { label: "Classes Today", value: "3", change: "next in 45 min", icon: Clock, color: "#f59e0b" },
  ];

  // TODAY'S CLASSES DATA
  const TODAY_CLASSES = [
    { time: "08:30 AM", subject: "Combined Maths", teacher: "Mr. Perera", status: "done", duration: "1.5h" },
    { time: "11:00 AM", subject: "Physics", teacher: "Mrs. Fernando", status: "live", duration: "1h" },
    { time: "03:30 PM", subject: "Chemistry", teacher: "Mr. Silva", status: "upcoming", duration: "1.5h" },
  ];

  // CALENDAR DATA
  const EVENTS_BY_DAY = {
    6: ["Maths"], 7: ["ICT"], 8: ["Maths", "Physics", "Chemistry"],
    9: ["Physics"], 10: ["ICT"], 13: ["Maths"], 14: ["Chemistry"],
    15: ["Physics"], 17: ["Maths"], 20: ["ICT"], 22: ["Physics"],
    24: ["Chemistry"], 27: ["Maths"], 29: ["Physics"],
  };

  const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // CALENDAR FUNCTIONS
  function buildMonthGrid(year, month) {
    const first = new Date(year, month, 1);
    const startOffset = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysInPrevMonth = new Date(year, month, 0).getDate();

    const cells = [];
    for (let i = startOffset - 1; i >= 0; i--) {
      cells.push({ day: daysInPrevMonth - i, current: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ day: d, current: true });
    }
    while (cells.length % 7 !== 0 || cells.length < 35) {
      cells.push({ day: cells.length - (startOffset + daysInMonth) + 1, current: false });
    }
    return cells;
  }

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthLabel = viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });
  const grid = useMemo(() => buildMonthGrid(year, month), [year, month]);

  const goMonth = (delta) => setViewDate(new Date(year, month + delta, 1));
  const goYear = (delta) => setViewDate(new Date(year + delta, month, 1));

  const isToday = (day, current) =>
    current && day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

  return (
    <div className="d-flex" style={{ minHeight: "100vh", overflow: "hidden", background: "#f0f2f5" }}>
      <StudentSidebar />

      <div
        className="flex-grow-1"
        style={{
          background: darkMode 
            ? "linear-gradient(145deg, #0f0f1a 0%, #1a1a2e 100%)" 
            : "linear-gradient(145deg, #f0f2f5 0%, #e8ecf1 100%)",
          minHeight: "100vh",
          overflowY: "auto",
          height: "100vh",
          padding: "0 32px 32px 32px",
        }}
      >
        {/* Top Bar */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            padding: "24px 0",
            borderBottom: darkMode ? "1px solid rgba(255,255,255,0.05)" : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "28px",
                fontWeight: "700",
                letterSpacing: "-0.5px",
                background: darkMode 
                  ? "linear-gradient(135deg, #f0f2f5 0%, #a0aec0 100%)"
                  : "linear-gradient(135deg, #1a1a2e 0%, #4a5568 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}
            >
              Dashboard
            </h1>
            <p style={{ color: darkMode ? "#718096" : "#a0aec0", fontSize: "14px", margin: 0 }}>
              Welcome back to your learning dashboard
            </p>
          </div>

          <div className="d-flex align-items-center gap-4">
            <div
              className="position-relative"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: darkMode ? "rgba(255,255,255,0.05)" : "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
              }}
            >
              <Bell size={18} color={darkMode ? "#a0aec0" : "#4a5568"} />
              <span
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#ef4444",
                  border: darkMode ? "2px solid #1a1a2e" : "2px solid #f0f2f5",
                }}
              />
            </div>

            <StudentProfileDropdown
              fullName={student.fullName || "Student"}
              profileImage={student.profileImage}
            />
          </div>
        </div>

        {/* Welcome Banner - Premium Glass Effect */}
        <div
          className="rounded-4 p-5 mt-4 mb-4"
          style={{
            background: darkMode 
              ? "linear-gradient(135deg, rgba(79, 70, 229, 0.15) 0%, rgba(14, 165, 233, 0.10) 100%)"
              : "linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(14, 165, 233, 0.05) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: `1px solid ${darkMode ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.5)"}`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, transparent 70%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "20%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)",
            }}
          />

          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center position-relative">
            <div>
              <div className="d-flex align-items-center gap-2 mb-2">
                <Stars size={20} color="#4f46e5" />
                <span style={{ 
                  fontSize: "12px", 
                  fontWeight: "600",
                  color: "#4f46e5",
                  background: "rgba(79, 70, 229, 0.1)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                }}>
                  Premium Learner
                </span>
              </div>
              <h2
                style={{
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "-0.5px",
                  color: darkMode ? "#f0f2f5" : "#1a1a2e",
                  margin: 0,
                }}
              >
                Welcome Back, {student.fullName || "Student"}! 👋
              </h2>
              <p style={{ 
                color: darkMode ? "#a0aec0" : "#4a5568", 
                fontSize: "16px",
                marginTop: "8px",
              }}>
                Stay focused and keep learning.
              </p>
              <div className="d-flex align-items-center gap-3 mt-3 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <Calendar3 size={16} color="#4f46e5" />
                  <span style={{ color: darkMode ? "#a0aec0" : "#4a5568", fontSize: "14px" }}>
                    You have {TODAY_CLASSES.length} classes today
                  </span>
                </div>
                <button
                  onClick={() => navigate("/my-timetable")}
                  style={{
                    padding: "8px 24px",
                    borderRadius: "30px",
                    border: "none",
                    background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
                    color: "#ffffff",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 20px rgba(79, 70, 229, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(79, 70, 229, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(79, 70, 229, 0.3)";
                  }}
                >
                  View Timetable
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
            <div className="d-none d-md-block" style={{ fontSize: "72px", opacity: 0.1 }}>
              <Mortarboard size={72} />
            </div>
          </div>
        </div>

        {/* Stats Cards - Premium Grid */}
        <div className="row g-3 mb-4">
          {STATS.map((stat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div
                className="rounded-4 p-4"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="d-flex align-items-center gap-3">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: `rgba(${index === 0 ? '79, 70, 229' : index === 1 ? '14, 165, 233' : index === 2 ? '16, 185, 129' : '245, 158, 11'}, 0.1)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <stat.icon size={20} color={stat.color} />
                  </div>
                  <div>
                    <p style={{ 
                      color: darkMode ? "#a0aec0" : "#718096", 
                      fontSize: "12px", 
                      fontWeight: "500",
                      margin: 0,
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}>
                      {stat.label}
                    </p>
                    <h3 style={{ 
                      fontSize: "24px", 
                      fontWeight: "700",
                      color: darkMode ? "#f0f2f5" : "#1a1a2e",
                      margin: 0,
                      letterSpacing: "-0.5px",
                    }}>
                      {stat.value}
                    </h3>
                    <p style={{ 
                      color: "#10b981", 
                      fontSize: "11px", 
                      fontWeight: "500",
                      margin: 0,
                    }}>
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Two Column Layout - Premium Cards */}
        <div className="row g-4">
          {/* Left: Today's Classes */}
          <div className="col-lg-5">
            <div
              className="rounded-4 p-4 h-100"
              style={{
                background: darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 style={{ 
                  fontSize: "16px", 
                  fontWeight: "700",
                  color: darkMode ? "#f0f2f5" : "#1a1a2e",
                  margin: 0,
                }}>
                  Today's Classes
                </h5>
                <span style={{ 
                  fontSize: "12px", 
                  color: "#4f46e5",
                  fontWeight: "500",
                  cursor: "pointer",
                }}>
                  View All
                </span>
              </div>

              {TODAY_CLASSES.map((cls, index) => (
                <div
                  key={index}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "12px",
                    marginBottom: "12px",
                    background: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
                    border: `1px solid ${darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#4f46e5";
                    e.currentTarget.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)";
                    e.currentTarget.style.transform = "translateX(0)";
                  }}
                >
                  <div className="d-flex align-items-center gap-3">
                    <div style={{ minWidth: "65px" }}>
                      <span style={{ 
                        fontSize: "11px", 
                        fontWeight: "600",
                        color: darkMode ? "#a0aec0" : "#718096",
                      }}>
                        {cls.time}
                      </span>
                    </div>
                    <div>
                      <div style={{ 
                        fontWeight: "600", 
                        fontSize: "14px",
                        color: darkMode ? "#f0f2f5" : "#1a1a2e",
                      }}>
                        {cls.subject}
                      </div>
                      <div style={{ 
                        fontSize: "12px", 
                        color: darkMode ? "#718096" : "#a0aec0",
                      }}>
                        {cls.teacher} • {cls.duration}
                      </div>
                    </div>
                  </div>
                  {cls.status === "done" && (
                    <span style={{ color: "#10b981", fontSize: "12px", fontWeight: "600" }}>
                      ✓ Completed
                    </span>
                  )}
                  {cls.status === "live" && (
                    <span style={{ 
                      color: "#ef4444", 
                      fontSize: "12px", 
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}>
                      <span style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#ef4444",
                        animation: "pulse 1.5s ease-in-out infinite",
                      }} />
                      Live
                    </span>
                  )}
                  {cls.status === "upcoming" && (
                    <span style={{ color: "#f59e0b", fontSize: "12px", fontWeight: "600" }}>
                      Upcoming
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Calendar */}
          <div className="col-lg-7">
            <div
              className="rounded-4 p-4"
              style={{
                background: darkMode ? "rgba(255,255,255,0.03)" : "#ffffff",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
              }}
            >
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 style={{ 
                  fontSize: "16px", 
                  fontWeight: "700",
                  color: darkMode ? "#f0f2f5" : "#1a1a2e",
                  margin: 0,
                }}>
                  {monthLabel}
                </h5>
                <span style={{ 
                  fontSize: "12px", 
                  color: darkMode ? "#718096" : "#a0aec0",
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                  padding: "4px 14px",
                  borderRadius: "20px",
                }}>
                  📅 {todayDate}
                </span>
              </div>

              {/* Calendar Navigation */}
              <div
                className="d-flex justify-content-between align-items-center rounded-3 px-3 py-2 mb-3"
                style={{
                  background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                }}
              >
                <div className="d-flex gap-1">
                  <button
                    onClick={() => goYear(-1)}
                    style={{
                      padding: "4px 8px",
                      borderRadius: "8px",
                      border: "none",
                      background: "transparent",
                      color: darkMode ? "#a0aec0" : "#4a5568",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <ChevronBarLeft size={14} />
                  </button>
                  <button
                    onClick={() => goMonth(-1)}
                    style={{
                      padding: "4px 8px",
                      borderRadius: "8px",
                      border: "none",
                      background: "transparent",
                      color: darkMode ? "#a0aec0" : "#4a5568",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <ChevronLeft size={14} />
                  </button>
                </div>
                <span style={{ fontSize: "14px", fontWeight: "600", color: darkMode ? "#f0f2f5" : "#1a1a2e" }}>
                  {monthLabel}
                </span>
                <div className="d-flex gap-1">
                  <button
                    onClick={() => goMonth(1)}
                    style={{
                      padding: "4px 8px",
                      borderRadius: "8px",
                      border: "none",
                      background: "transparent",
                      color: darkMode ? "#a0aec0" : "#4a5568",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <ChevronRight size={14} />
                  </button>
                  <button
                    onClick={() => goYear(1)}
                    style={{
                      padding: "4px 8px",
                      borderRadius: "8px",
                      border: "none",
                      background: "transparent",
                      color: darkMode ? "#a0aec0" : "#4a5568",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}
                    onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
                  >
                    <ChevronBarRight size={14} />
                  </button>
                </div>
              </div>

              {/* Weekday Headers */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "4px",
                  textAlign: "center",
                  fontSize: "10px",
                  fontWeight: "600",
                  color: darkMode ? "#718096" : "#a0aec0",
                  letterSpacing: "0.5px",
                  marginBottom: "4px",
                }}
              >
                {WEEKDAYS.map((d) => (
                  <div key={d} className="py-1">{d}</div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "4px",
                }}
              >
                {grid.map((cell, idx) => {
                  const isWeekend = idx % 7 >= 5;
                  const events = cell.current ? EVENTS_BY_DAY[cell.day] : null;
                  const selected = cell.current && cell.day === selectedDay;
                  const todayCell = isToday(cell.day, cell.current);
                  
                  return (
                    <button
                      key={idx}
                      disabled={!cell.current}
                      onClick={() => setSelectedDay(cell.day)}
                      style={{
                        height: "48px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "10px",
                        border: "none",
                        background: !cell.current
                          ? "transparent"
                          : todayCell
                          ? "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)"
                          : selected
                          ? darkMode ? "rgba(255,255,255,0.1)" : "rgba(79, 70, 229, 0.1)"
                          : "transparent",
                        color: !cell.current
                          ? darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"
                          : todayCell
                          ? "#ffffff"
                          : selected
                          ? darkMode ? "#f0f2f5" : "#4f46e5"
                          : isWeekend
                          ? darkMode ? "#f87171" : "#ef4444"
                          : darkMode ? "#a0aec0" : "#1a1a2e",
                        fontWeight: todayCell || selected ? "700" : "400",
                        fontSize: "13px",
                        transition: "all 0.2s ease",
                        cursor: cell.current ? "pointer" : "default",
                        border: selected && !todayCell 
                          ? `2px solid ${darkMode ? "rgba(255,255,255,0.2)" : "#4f46e5"}`
                          : "none",
                        boxShadow: todayCell ? "0 4px 20px rgba(79, 70, 229, 0.3)" : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (cell.current && !todayCell && !selected) {
                          e.currentTarget.style.background = darkMode ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (cell.current && !todayCell && !selected) {
                          e.currentTarget.style.background = "transparent";
                        }
                      }}
                    >
                      <span>{cell.day}</span>
                      {events && (
                        <span style={{ display: "flex", gap: "2px", marginTop: "1px" }}>
                          {events.slice(0, 3).map((_, i) => (
                            <span
                              key={i}
                              style={{
                                width: "4px",
                                height: "4px",
                                borderRadius: "50%",
                                background: todayCell ? "#ffffff" : "#4f46e5",
                                opacity: todayCell ? 0.8 : 0.6,
                              }}
                            />
                          ))}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Selected Day Detail */}
              <div
                className="mt-3 rounded-3 p-3"
                style={{
                  border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"}`,
                  background: darkMode ? "rgba(255,255,255,0.02)" : "rgba(0,0,0,0.01)",
                }}
              >
                <div style={{ 
                  fontSize: "11px", 
                  fontWeight: "500", 
                  color: darkMode ? "#718096" : "#a0aec0",
                  marginBottom: "6px",
                }}>
                  Schedule for {monthLabel.split(" ")[0]} {selectedDay}
                </div>
                {EVENTS_BY_DAY[selectedDay] ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {EVENTS_BY_DAY[selectedDay].map((subj) => (
                      <span
                        key={subj}
                        style={{
                          padding: "4px 14px",
                          borderRadius: "20px",
                          background: darkMode ? "rgba(255,255,255,0.05)" : "rgba(79, 70, 229, 0.08)",
                          color: darkMode ? "#a0aec0" : "#4f46e5",
                          border: `1px solid ${darkMode ? "rgba(255,255,255,0.06)" : "rgba(79, 70, 229, 0.15)"}`,
                          fontSize: "12px",
                          fontWeight: "500",
                        }}
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div style={{ 
                    fontSize: "12px", 
                    color: darkMode ? "#718096" : "#a0aec0",
                  }}>
                    No classes scheduled
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(0.8); }
            100% { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}

export default StudentDashboard;