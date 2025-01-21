import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="HomePage">
      {/* Background Sections */}
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

      {/* Content Section */}
      <div className="content">
        <div className="text-container">
          <h1>Welcome to Our Business</h1>
            <p>
              We offer a variety of services to help you with your car detailing and
              website needs. Click on the buttons below to learn more about our
              services.
            </p>
          </div>

          <div className="button-container">
            <button
              onMouseEnter={() => setHoveredButton("businessOne")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => navigate("/CarService")}
            >
              Car Detailing Services
            </button>
            <button
              onMouseEnter={() => setHoveredButton("businessTwo")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => navigate("/WebService")}
            >
              Website Services
            </button>
          </div>
        </div>
      </div>
 );
}

export default HomePage;
