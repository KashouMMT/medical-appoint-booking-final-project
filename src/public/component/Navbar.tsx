import React, { useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

type Notification = {
  id: string;
  title: string;       // e.g., "Appointment Details"
  doctor: string;      // e.g., "Dr. Denis Raj"
  specialty: string;   // e.g., "Dentist"
  name: string;        // patient name
  phone: string;
  date: string;        // ISO date string
  time: string;        // e.g., "9:00 AM"
  read?: boolean;
};

const seed: Notification[] = [
  {
    id: "n1",
    title: "Appointment Details",
    doctor: "Dr. Denis Raj",
    specialty: "Dentist",
    name: "Peter",
    phone: "1234567890",
    date: "2023-07-24",
    time: "9:00 AM",
    read: false,
  },
  {
    id: "n2",
    title: "Appointment Details",
    doctor: "Dr. Aiko Tanaka",
    specialty: "Dermatologist",
    name: "Myat",
    phone: "0987654321",
    date: "2025-10-20",
    time: "10:30 AM",
    read: false,
  },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const [notifications, setNotifications] = useState<Notification[]>(seed);

  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  const submitSearch = (value?: string) => {
    const term = (value ?? q).trim();
    if (!term) return;
    navigate(`/search?q=${encodeURIComponent(term)}`);
  };

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  const clearAll = () => setNotifications([]);

  const markOneRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#a6f8ff" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <span className="fw-semibold">StayHealthy</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <div className="d-flex align-items-center">
            {/* Nav links */}
            <ul className="navbar-nav mb-2 mb-lg-0 me-3 gap-4">
              <li className="nav-item"><NavLink to="/home" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/appointment" className="nav-link">Appointment</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" className="nav-link">Health Blog</NavLink></li>
              <li className="nav-item"><NavLink to="/reviews" className="nav-link">Reviews</NavLink></li>
            </ul>

            {/* Search */}
            <form
              className="input-group me-3"
              style={{ minWidth: 260 }}
              onSubmit={(e) => {
                e.preventDefault();
                submitSearch();
              }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search doctors, clinics, hospitals…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit" aria-label="Search">
                🔍
              </button>
            </form>

            {/* 🔔 Notifications */}
            <div className="dropdown me-3">
              <button
                className="btn btn-light position-relative"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Notifications"
              >
                {/* bell icon (emoji or swap for an icon font) */}
                🔔
                {unreadCount > 0 && (
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {unreadCount}
                    <span className="visually-hidden">unread notifications</span>
                  </span>
                )}
              </button>

              <div
                className="dropdown-menu dropdown-menu-end p-0 shadow"
                style={{ width: 340, maxHeight: 380, overflowY: "auto" }}
              >
                <div className="d-flex justify-content-between align-items-center px-3 py-2 border-bottom">
                  <strong>Notifications</strong>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-secondary" onClick={markAllRead}>
                      Mark all read
                    </button>
                    <button className="btn btn-sm btn-outline-danger" onClick={clearAll}>
                      Clear
                    </button>
                  </div>
                </div>

                {notifications.length === 0 && (
                  <div className="px-3 py-4 text-center text-muted">No notifications</div>
                )}

                {notifications.map((n) => (
                  <button
                    key={n.id}
                    className={`dropdown-item text-wrap ${!n.read ? "bg-light" : ""}`}
                    onClick={() => {
                      markOneRead(n.id);
                      // Optional: navigate to details page
                      // navigate(`/appointments/${n.id}`);
                    }}
                  >
                    <div className="p-2 rounded" style={{ background: "#e7f1ff" }}>
                      <div className="fw-bold">{n.title}</div>
                      <div><span className="fw-semibold">Doctor:</span> {n.doctor}</div>
                      <div><span className="fw-semibold">Speciality:</span> {n.specialty}</div>
                      <div><span className="fw-semibold">Name:</span> {n.name}</div>
                      <div><span className="fw-semibold">Phone Number:</span> {n.phone}</div>
                      <div><span className="fw-semibold">Date of Appointment:</span> {n.date}</div>
                      <div><span className="fw-semibold">Time Slot:</span> {n.time}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Auth buttons */}
            <div className="d-flex gap-3">
              <Link to="/signup" className="btn btn-outline-primary rounded-4 px-4 py-2">Sign up</Link>
              <Link to="/login" className="btn btn-outline-primary rounded-4 px-4 py-2">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
