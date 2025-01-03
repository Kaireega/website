import React from "react";
import "./App.css";
import SocialBar from "./components/socialBar/SocialBar";
import Footer from "./components/footer/Footer";
import OpenMessage from "./components/open_message/OpenMessage";
import VerticalTimeline from "./components/verticalTimeline/VerticalTimeline";
import StarryBackground from "./components/starryBackground/StarryBackground";
import PlanetsBackground from "./components/planetsBackground/PlanetsBackground";
import Skills from "./components/skills/Skills";
import ProjectDisplay from "./components/projectsDisplay/ProjectsDisplay";

function App() {
  return (
    <div className="App">
      <div className="background">
        <StarryBackground starCount={300} />
        <PlanetsBackground />
        <SocialBar />
        <OpenMessage />
        <ProjectDisplay/>
        <Skills/>
        <VerticalTimeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;
