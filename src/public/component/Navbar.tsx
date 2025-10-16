import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#a6f8ffff" }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/home">
            <span className="fw-semibold">StayHealthy</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          {/* Right-aligned section: nav + buttons */}
          <div className="d-flex align-items-center">
            <ul className="navbar-nav mb-2 mb-lg-0 me-4 gap-4 ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  Appointment
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Health Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Reviews
                </a>
              </li>
            </ul>

            <div className="d-flex ms-3 gap-3">
              <a className="btn btn-outline-primary rounded-4 px-4 py-2">Sign up</a>
              <a className="btn btn-outline-primary rounded-4 px-4 py-2">Login</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
