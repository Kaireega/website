import React from "react";
import "./WebService.css";
import SocialBar from "../../components/socialBar/SocialBar";
import Footer from "../../components/footer/Footer";
import OpenMessage from "../../components/open_message/OpenMessage";
import VerticalTimeline from "../../components/verticalTimeline/VerticalTimeline";
import StarryBackground from "../../components/starryBackground/StarryBackground";
import PlanetsBackground from "../../components/planetsBackground/PlanetsBackground";
import Skills from "../../components/skills/Skills";
import ProjectDisplay from "../../components/projectsDisplay/ProjectsDisplay";


function WebService() {
    return (
      <div className="WebService">
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

export default WebService