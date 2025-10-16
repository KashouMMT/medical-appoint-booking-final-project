import React, { useState } from "react";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    role: "",
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<{ [ key:string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value} = e.target;
    setFormData({...formData,[name]: value});
  }

  const validateForm = () => {
    let newErrors: { [key:string]:string} = {};
    if (!formData.role || formData.role === "Select role") newErrors.role = "Please select a role.";
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.phone || !/^[0-9]{9,15}$/.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.password || formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters long."; 

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
    setFormData({ role: "", name: "", phone: "", email: "", password: "" });
    setErrors({});
  };

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

        <form onSubmit={handleSubmit}>
          {/* Role */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Role</label>
            <select
              className={`form-select ${errors.role ? "is-invalid" : ""}`}
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option>Select role</option>
              <option>Doctor</option>
              <option>Patient</option>
              <option>Admin</option>
            </select>
            {errors.role && <div className="invalid-feedback">{errors.role}</div>}
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Phone</label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          {/* Buttons */}
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary fw-semibold rounded-3">
              Submit
            </button>
            <button type="button" onClick={handleReset} className="btn btn-danger fw-semibold rounded-3">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
