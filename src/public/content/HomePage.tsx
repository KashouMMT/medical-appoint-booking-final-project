import React, { useState } from "react";

const HomePage: React.FC = () => {
    const [display,SetDisplay] = useState("0");

    return (
    <main className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="container text-center p-4 bg-white rounded-4 shadow" style={{ maxWidth: "360px" }}>
            <h2 className="mb-4 fw-bold text-secondary">React Calculator</h2>

        {/* Display */}
        <div className="border rounded-3 bg-dark text-white fs-4 text-end p-3 mb-4">
            {display}
        </div>

        {/* Buttons Grid */}
        <div className="row g-2">
            {[
                ["7", "8", "9", "/"],
                ["4", "5", "6", "*"],
                ["1", "2", "3", "-"],
                ["0", ".", "=", "+"],
            ].map((row, i) => (
            <div className="col-12 d-flex justify-content-between" key={i}>
              {row.map((btn) => (
                <button
                  key={btn}
                  className={`btn flex-fill mx-1 py-3 fs-5 fw-semibold rounded-3 ${
                    /[0-9.]/.test(btn)
                      ? "btn-outline-secondary"
                      : btn === "="
                      ? "btn-success"
                      : "btn-dark"
                  }`}
                  
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
