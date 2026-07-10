import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useLocation } from "react-router-dom";
import {
  Search,
  EyeFill,
  CurrencyDollar,
  HourglassSplit,
  CheckCircleFill,
  XCircleFill,
  ChevronDown,
  ChevronUp,
  Download,
  Filter,
  ArrowClockwise,
  ThreeDotsVertical,
} from "react-bootstrap-icons";

import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminTopNavbar from "../../components/admin/AdminTopNavbar";

function AdminPayments() {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [search, setSearch] = useState("");
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedGrade, setSelectedGrade] = useState("All Grades");
  const [selectedMethod, setSelectedMethod] = useState("All Methods");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation();

  const loadPayments = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:5000/api/payment");
      setPayments(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setDarkMode(savedTheme === "dark");
    loadPayments();
  }, [loadPayments]);

  const approvePayment = async (id) => {
    if (!window.confirm("Are you sure you want to approve this payment?")) return;
    try {
      await axios.put(`http://localhost:5000/api/payment/approve/${id}`);
      await loadPayments();
      alert("Payment approved successfully!");
    } catch (err) {
      console.log(err);
      alert("Failed to approve payment.");
    }
  };

  const rejectPayment = async (id) => {
    if (!window.confirm("Are you sure you want to reject this payment?")) return;
    try {
      await axios.put(`http://localhost:5000/api/payment/reject/${id}`);
      await loadPayments();
      alert("Payment rejected!");
    } catch (err) {
      console.log(err);
      alert("Failed to reject payment.");
    }
  };

  // Statistics calculations
  const stats = useMemo(() => {
    const totalIncome = payments.reduce((sum, p) => sum + p.amount, 0);
    const pending = payments.filter(p => p.status === "Pending").length;
    const approved = payments.filter(p => p.status === "Approved").length;
    const rejected = payments.filter(p => p.status === "Rejected").length;
    const thisMonth = payments.filter(p => {
      const date = new Date(p.createdAt);
      const now = new Date();
      return date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();
    });
    const thisMonthIncome = thisMonth.reduce((sum, p) => sum + p.amount, 0);
    const lastMonth = payments.filter(p => {
      const date = new Date(p.createdAt);
      const now = new Date();
      return date.getMonth() === now.getMonth() - 1 && date.getFullYear() === now.getFullYear();
    });
    const lastMonthIncome = lastMonth.reduce((sum, p) => sum + p.amount, 0);
    const growthRate = lastMonthIncome > 0 ? ((thisMonthIncome - lastMonthIncome) / lastMonthIncome * 100) : 0;

    return {
      totalIncome,
      pending,
      approved,
      rejected,
      thisMonthIncome,
      growthRate: growthRate.toFixed(1),
    };
  }, [payments]);

  // Filtered and sorted payments
  const filteredPayments = useMemo(() => {
    let filtered = payments.filter((payment) => {
      const fullName = `${payment.firstName} ${payment.lastName}`.toLowerCase();
      const searchTerm = search.toLowerCase();
      const matchesSearch = fullName.includes(searchTerm) || 
                           (payment.receiptNumber || "").toLowerCase().includes(searchTerm);
      
      const matchesStatus = selectedStatus === "All Status" || payment.status === selectedStatus;
      const matchesGrade = selectedGrade === "All Grades" || payment.grade === selectedGrade;
      const matchesMethod = selectedMethod === "All Methods" || payment.paymentMethod === selectedMethod;

      return matchesSearch && matchesStatus && matchesGrade && matchesMethod;
    });

    // Sorting
    filtered.sort((a, b) => {
      let aVal = a[sortField];
      let bVal = b[sortField];
      
      if (sortField === "amount" || sortField === "grade") {
        aVal = parseInt(aVal);
        bVal = parseInt(bVal);
      }
      
      if (sortField === "createdAt") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }
      
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

    return filtered;
  }, [payments, search, selectedStatus, selectedGrade, selectedMethod, sortField, sortDirection]);

  // Pagination
  const totalItems = filteredPayments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = filteredPayments.slice(startIndex, endIndex);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getStatusBadgeClass = (status) => {
    const classes = {
      Pending: "bg-warning text-dark",
      Approved: "bg-success",
      Rejected: "bg-danger",
    };
    return classes[status] || "bg-secondary";
  };

  const getMethodBadgeClass = (method) => {
    const classes = {
      "Bank Deposit": "bg-warning text-dark",
      "Credit Card": "bg-info text-dark",
      "Debit Card": "bg-primary",
      "Online Payment": "bg-success",
    };
    return classes[method] || "bg-secondary";
  };

  const StatCard = ({ icon: Icon, title, value, subtitle, color, bgColor }) => (
    <div
      className="card border-0 shadow-sm rounded-4 h-100 transition-hover"
      style={{
        background: darkMode ? "#3a4047" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div className="card-body p-4">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h6
              className="text-uppercase fw-semibold mb-2"
              style={{
                color: darkMode ? "#d1d5db" : "#6c757d",
                fontSize: "11px",
                letterSpacing: "0.8px",
              }}
            >
              {title}
            </h6>
            <h2 className="fw-bold mb-1" style={{ fontSize: "28px" }}>
              {value}
            </h2>
            <small className={`fw-semibold ${subtitle.includes("+") ? "text-success" : "text-danger"}`}>
              {subtitle}
            </small>
          </div>
          <div
            className="rounded-3 d-flex justify-content-center align-items-center"
            style={{
              width: "56px",
              height: "56px",
              background: bgColor,
              flexShrink: 0,
              transition: "transform 0.3s ease",
            }}
          >
            <Icon size={26} color={color} />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        <AdminSidebar />
        <div
          className="col-lg-9 col-xl-10"
          style={{
            background: darkMode ? "#2f343a" : "#f0f2f5",
            minHeight: "100vh",
          }}
        >
          <AdminTopNavbar
            title="Payments"
            subtitle="Manage student payments"
          />

          <div className="container-fluid p-4">
            {/* ================= STATISTICS CARDS ================= */}
            <div className="row g-4 mb-4">
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={CurrencyDollar}
                  title="Total Income"
                  value={`Rs. ${stats.totalIncome.toLocaleString()}`}
                  subtitle={`${stats.growthRate >= 0 ? "↑" : "↓"} ${Math.abs(stats.growthRate)}% this month`}
                  color="#0d6efd"
                  bgColor="#e7f1ff"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={HourglassSplit}
                  title="Pending Verification"
                  value={stats.pending}
                  subtitle="Waiting for review"
                  color="#ffc107"
                  bgColor="#fff3cd"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={CheckCircleFill}
                  title="Approved Payments"
                  value={stats.approved}
                  subtitle="Successfully approved"
                  color="#198754"
                  bgColor="#d1e7dd"
                />
              </div>
              <div className="col-md-6 col-xl-3">
                <StatCard
                  icon={XCircleFill}
                  title="Rejected Payments"
                  value={stats.rejected}
                  subtitle="Need resubmission"
                  color="#dc3545"
                  bgColor="#f8d7da"
                />
              </div>
            </div>

            {/* ================= TOOLBAR ================= */}
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
              {/* Search */}
              <div className="position-relative flex-grow-1" style={{ maxWidth: "400px" }}>
                <Search
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "16px",
                    transform: "translateY(-50%)",
                    color: "#6c757d",
                    fontSize: "18px",
                  }}
                />
                <input
                  type="text"
                  className="form-control rounded-3 border-0 shadow-sm ps-5 py-2"
                  placeholder="Search by student name or receipt number..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    background: darkMode ? "#3a4047" : "#ffffff",
                    color: darkMode ? "#ffffff" : "#000000",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div className="d-flex flex-wrap gap-2">
                <button
                  className="btn btn-outline-secondary rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                  onClick={() => setShowFilters(!showFilters)}
                  style={{ fontSize: "14px" }}
                >
                  <Filter size={16} />
                  Filters
                  <ChevronDown size={14} className={showFilters ? "rotate-180" : ""} />
                </button>
                <button
                  className="btn btn-outline-primary rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                  onClick={loadPayments}
                  style={{ fontSize: "14px" }}
                >
                  <ArrowClockwise size={16} className={loading ? "spin" : ""} />
                  Refresh
                </button>
                <button
                  className="btn btn-primary rounded-pill px-3 py-2 d-flex align-items-center gap-2"
                  style={{ fontSize: "14px" }}
                >
                  <Download size={16} />
                  Export
                </button>
              </div>
            </div>

            {/* ================= FILTERS ================= */}
            {showFilters && (
              <div
                className="row g-3 mb-4 p-3 rounded-3"
                style={{
                  background: darkMode ? "#3a4047" : "#ffffff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  animation: "slideDown 0.3s ease",
                }}
              >
                <div className="col-md-3">
                  <label className="form-label fw-semibold small">Grade</label>
                  <select
                    className="form-select rounded-3 border-0 shadow-sm"
                    value={selectedGrade}
                    onChange={(e) => setSelectedGrade(e.target.value)}
                    style={{
                      background: darkMode ? "#495057" : "#f8f9fa",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  >
                    <option>All Grades</option>
                    {[6,7,8,9,10,11,12].map(g => (
                      <option key={g}>Grade {g}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold small">Payment Method</label>
                  <select
                    className="form-select rounded-3 border-0 shadow-sm"
                    value={selectedMethod}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    style={{
                      background: darkMode ? "#495057" : "#f8f9fa",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  >
                    <option>All Methods</option>
                    <option>Bank Deposit</option>
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>Online Payment</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold small">Status</label>
                  <select
                    className="form-select rounded-3 border-0 shadow-sm"
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    style={{
                      background: darkMode ? "#495057" : "#f8f9fa",
                      color: darkMode ? "#ffffff" : "#000000",
                    }}
                  >
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                </div>
                <div className="col-md-3 d-flex align-items-end">
                  <button
                    className="btn btn-outline-danger w-100 rounded-pill"
                    onClick={() => {
                      setSelectedGrade("All Grades");
                      setSelectedMethod("All Methods");
                      setSelectedStatus("All Status");
                      setSearch("");
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            )}

            {/* ================= PAYMENT TABLE ================= */}
            <div
              className="card border-0 shadow-sm rounded-4 overflow-hidden"
              style={{
                background: darkMode ? "#3a4047" : "#ffffff",
                color: darkMode ? "#ffffff" : "#000000",
              }}
            >
              {loading ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p className="mt-2 text-muted">Loading payments...</p>
                </div>
              ) : (
                <>
                  <div className="table-responsive">
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr
                          style={{
                            background: darkMode ? "#495057" : "#f8f9fa",
                            borderBottom: darkMode ? "1px solid #495057" : "1px solid #e9ecef",
                          }}
                        >
                          {[
                            { key: "receiptNumber", label: "Receipt No" },
                            { key: "firstName", label: "Student" },
                            { key: "teacher", label: "Teacher" },
                            { key: "grade", label: "Grade" },
                            { key: "subject", label: "Subject" },
                            { key: "amount", label: "Amount" },
                            { key: "paymentMethod", label: "Method" },
                            { key: "status", label: "Status" },
                          ].map(({ key, label }) => (
                            <th
                              key={key}
                              className="py-3 fw-semibold"
                              style={{
                                fontSize: "12px",
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                userSelect: "none",
                                color: darkMode ? "#d1d5db" : "#6c757d",
                              }}
                              onClick={() => handleSort(key)}
                            >
                              <div className="d-flex align-items-center gap-1">
                                {label}
                                {sortField === key && (
                                  sortDirection === "asc" ? <ChevronUp size={14} /> : <ChevronDown size={14} />
                                )}
                              </div>
                            </th>
                          ))}
                          <th className="text-center py-3" style={{ fontSize: "12px", letterSpacing: "0.5px", textTransform: "uppercase", color: darkMode ? "#d1d5db" : "#6c757d" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentItems.length === 0 ? (
                          <tr>
                            <td colSpan="9" className="text-center py-5">
                              <div className="d-flex flex-column align-items-center">
                                <Search size={48} className="text-muted mb-3" />
                                <h5 className="text-muted">No payments found</h5>
                                <small className="text-muted">Try adjusting your search or filters</small>
                              </div>
                            </td>
                          </tr>
                        ) : (
                          currentItems.map((payment, index) => (
                            <tr
                              key={payment._id}
                              style={{
                                background: darkMode ? "#3a4047" : "#ffffff",
                                borderBottom: darkMode ? "1px solid #495057" : "1px solid #f1f3f5",
                                animation: `fadeIn 0.3s ease ${index * 0.05}s`,
                              }}
                              className="table-row-hover"
                            >
                              <td className="ps-4">
                                <span className="fw-semibold" style={{ fontSize: "13px" }}>
                                  {payment.receiptNumber}
                                </span>
                              </td>
                              <td>
                                <div>
                                  <div className="fw-semibold" style={{ fontSize: "14px" }}>
                                    {payment.firstName} {payment.lastName}
                                  </div>
                                </div>
                              </td>
                              <td style={{ fontSize: "14px" }}>{payment.teacher}</td>
                              <td>
                                <span className="badge bg-primary px-3 py-2 rounded-pill" style={{ fontSize: "11px" }}>
                                  {payment.grade}
                                </span>
                              </td>
                              <td style={{ fontSize: "14px" }}>{payment.subject}</td>
                              <td>
                                <span className="fw-bold" style={{ fontSize: "14px", color: "#0d6efd" }}>
                                  Rs. {payment.amount.toLocaleString()}
                                </span>
                              </td>
                              <td>
                                <span
                                  className={`badge ${getMethodBadgeClass(payment.paymentMethod)} px-3 py-2 rounded-pill`}
                                  style={{ fontSize: "11px" }}
                                >
                                  {payment.paymentMethod}
                                </span>
                              </td>
                              <td>
                                <span
                                  className={`badge ${getStatusBadgeClass(payment.status)} px-3 py-2 rounded-pill`}
                                  style={{ fontSize: "11px" }}
                                >
                                  <span className="d-inline-block me-1 rounded-circle" 
                                    style={{
                                      width: "6px",
                                      height: "6px",
                                      background: payment.status === "Pending" ? "#ffc107" : 
                                                 payment.status === "Approved" ? "#198754" : "#dc3545"
                                    }}
                                  />
                                  {payment.status}
                                </span>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center gap-1">
                                  <button
                                    className="btn btn-outline-primary btn-sm rounded-circle"
                                    style={{ width: "34px", height: "34px" }}
                                    onClick={() => navigate(`/payment-details/${payment._id}`)}
                                    title="View Details"
                                  >
                                    <EyeFill size={14} />
                                  </button>
                                  {payment.status === "Pending" && (
                                    <>
                                      <button
                                        className="btn btn-success btn-sm rounded-pill px-3"
                                        style={{ fontSize: "12px" }}
                                        onClick={() => approvePayment(payment._id)}
                                      >
                                        Approve
                                      </button>
                                      <button
                                        className="btn btn-danger btn-sm rounded-pill px-3"
                                        style={{ fontSize: "12px" }}
                                        onClick={() => rejectPayment(payment._id)}
                                      >
                                        Reject
                                      </button>
                                    </>
                                  )}
                                  {payment.status !== "Pending" && (
                                    <button
                                      className="btn btn-outline-secondary btn-sm rounded-circle"
                                      style={{ width: "34px", height: "34px" }}
                                      title="More Actions"
                                    >
                                      <ThreeDotsVertical size={14} />
                                    </button>
                                  )}
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* ================= TABLE FOOTER ================= */}
                  <div
                    className="card-footer border-0 py-3 px-4"
                    style={{
                      background: darkMode ? "#3a4047" : "#ffffff",
                      borderTop: darkMode ? "1px solid #495057" : "1px solid #e9ecef",
                    }}
                  >
                    <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                      <div className="d-flex align-items-center gap-3">
                        <small className="text-muted">
                          Showing {startIndex + 1}–{Math.min(endIndex, totalItems)} of {totalItems} transactions
                        </small>
                        <select
                          className="form-select form-select-sm rounded-pill"
                          style={{ width: "80px" }}
                          value={itemsPerPage}
                          onChange={(e) => setItemsPerPage(Number(e.target.value))}
                        >
                          <option value={5}>5</option>
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                        </select>
                      </div>
                      <div className="d-flex gap-1">
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}
                          style={{ fontSize: "13px" }}
                        >
                          First
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                          onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                          disabled={currentPage === 1}
                          style={{ fontSize: "13px" }}
                        >
                          Previous
                        </button>
                        {[...Array(Math.min(5, totalPages))].map((_, i) => {
                          let pageNum;
                          if (totalPages <= 5) {
                            pageNum = i + 1;
                          } else if (currentPage <= 3) {
                            pageNum = i + 1;
                          } else if (currentPage >= totalPages - 2) {
                            pageNum = totalPages - 4 + i;
                          } else {
                            pageNum = currentPage - 2 + i;
                          }
                          return (
                            <button
                              key={pageNum}
                              className={`btn btn-sm rounded-pill px-3 ${currentPage === pageNum ? "btn-primary" : "btn-outline-secondary"}`}
                              onClick={() => setCurrentPage(pageNum)}
                              style={{ fontSize: "13px" }}
                            >
                              {pageNum}
                            </button>
                          );
                        })}
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                          onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                          disabled={currentPage === totalPages}
                          style={{ fontSize: "13px" }}
                        >
                          Next
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary rounded-pill px-3"
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}
                          style={{ fontSize: "13px" }}
                        >
                          Last
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ================= GLOBAL STYLES ================= */}
      <style>{`
        .transition-hover {
          transition: all 0.3s ease;
        }
        
        .table-row-hover {
          transition: background 0.2s ease;
        }
        .table-row-hover:hover {
          background: ${darkMode ? "#495057" : "#f8f9fa"} !important;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        .rotate-180 {
          transform: rotate(180deg);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default AdminPayments;