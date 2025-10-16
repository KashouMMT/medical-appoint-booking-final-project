import React from "react";

const SignUp: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <h3 className="text-center fw-bold mb-2">Sign Up</h3>
        <p className="text-center mb-4">
          Already a member?{" "}
          <a href="/login" className="text-primary text-decoration-none fw-semibold">
            Login
          </a>
        </p>

        {/* Role */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Role</label>
          <select className="form-select">
            <option>Select role</option>
            <option>Doctor</option>
            <option>Patient</option>
            <option>Admin</option>
          </select>
        </div>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Phone</label>
          <input type="tel" className="form-control" placeholder="Enter your phone number" />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Email</label>
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Password</label>
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>

        {/* Buttons */}
        <div className="d-grid gap-2">
          <button className="btn btn-primary fw-semibold rounded-3">Submit</button>
          <button className="btn btn-danger fw-semibold rounded-3">Reset</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
