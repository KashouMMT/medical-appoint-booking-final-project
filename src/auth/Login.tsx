import React from "react";

const Login: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "350px", borderRadius: "10px" }}>
        <h3 className="text-center fw-bold mb-2">Login</h3>
        <p className="text-center mb-4">
          Are you a new member?{" "}
          <a href="/signup" className="text-primary text-decoration-none fw-semibold">
            Sign Up Here
          </a>
        </p>

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
          <button className="btn btn-primary fw-semibold rounded-3">Login</button>
          <button className="btn btn-danger fw-semibold rounded-3">Reset</button>
        </div>

        {/* Forgot Password */}
        <div className="text-center mt-3">
          <a href="/forgot-password" className="text-decoration-none text-dark fw-semibold">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
