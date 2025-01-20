import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import WebService from "./pages/webService/WebService";
import CarService from "./pages/carService/CarService";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/WebService" element={<WebService />} />
        <Route path="/CarService" element={<CarService />} />
      </Routes>
    </Router>
  );
}

export default App;
