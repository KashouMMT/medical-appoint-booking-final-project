import React from "react";
import { useState } from "react";

const Login: React.FC = () => {
  {/* email, password*/ }
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{[key:string] : string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData,[name]:value});
  }

  const validateForm = () => {
    let newErrors: { [key:string]:string} = {};
    if(!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if(!formData.password || formData.password.length < 6 )
      newErrors.password = "Password must be at least 6 characters.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted sucessfully");
      console.log("Form Data:",formData);
    }
  }

  const handleReset = () => {
    setFormData({email: "",password: ""});
    setErrors({});
  }

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
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input 
              type="email" 
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email" 
              name="email"
              value={formData.email}
              onChange={handleChange}/>
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input 
              type="password" 
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your password" 
              name="password"
              value={formData.password}
              onChange={handleChange}/>
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary fw-semibold rounded-3">
              Login
            </button>
            <button type="button" onClick={handleReset} className="btn btn-danger fw-semibold rounded-3">
              Reset
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-center mt-3">
            <a href="/forgot-password" className="text-decoration-none text-dark fw-semibold">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
