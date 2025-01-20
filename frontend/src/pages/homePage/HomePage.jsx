import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="HomePage">
      <div
        className={`background-section left ${
          hoveredButton === "businessOne" ? "hovered" : ""
        }`}
      ></div>
      <div
        className={`background-section right ${
          hoveredButton === "businessTwo" ? "hovered" : ""
        }`}
      ></div>

      <div className="content">
        <h1>Welcome to Our Services</h1>
        <p>Select the business you would like to explore:</p>
        <div className="button-container">
          <button
            onMouseEnter={() => setHoveredButton("businessOne")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => navigate("/WebService")}
          >
            Go to Business One
          </button>
          <button
            onMouseEnter={() => setHoveredButton("businessTwo")}
            onMouseLeave={() => setHoveredButton(null)}
            onClick={() => navigate("/CarService")}
          >
            Go to Business Two
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
