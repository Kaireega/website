import React from "react";
import "./VerticalTimeline.css"; // Import CSS for styling

const VerticalTimeline = () => {
  const events = [
    { year: "02/2024 – 07/2024", title: "Software Developer", company: "ThoughtWorks", 
      description: `Developed Java and Spring-based applications to deliver customized client
      solutions, enhancing functionality and performance.
      Collaborated with developers, QA, UX/XD, and BAs to release new features
      that elevated user experience and interaction.
      Enhanced full-stack development skills through end-to-end web application
      development.` },
    { year: "05/2023 – 12/2023", title: "Pool Manager", company: "Wilsons Pool Services", 
      description: `Performed regular maintenance and cleaning of residential and commercial
      swimming pools on a weekly and biweekly basis.
      Monitored and adjusted chemical levels to ensure safe and balanced water
      quality.
      Maintained detailed records of chemical levels, service dates, and repairs for
      each pool serviced.` },
    { year: "05/2022 – 08/2022", title: "Software Developer intern", company: "ThoughtWorks", 
      description: `Collaborated with a team to develop a web-based social change application,
      leveraging HTML, CSS, JavaScript, and backend technologies to deliver an
      impactful user experience. Completed a 10-week consulting skills program,
      gaining expertise in client engagement, project management, and agile
      methodologies.` },
      { year: "08/2018 – 12/2022", title: "Lead Baker", company: "Sammy Chessecake", 
      description: `Oversaw daily baking operations, ensuring consistent quality, flavor, and
      presentation of all pastries and desserts, including the signature cheesecakes.
      Maintained a clean and compliant kitchen environment, adhering to all food
      safety and sanitation guidelines, and passing health inspections with zero
      violations..` }
  ];

  return (
    <div className="timeline-container">
      <div className="resume">Resume</div>
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title}</h3>
            <span className="timeline-year">{event.year}</span>
            <span className="company-name">{event.company}</span>
            <p className="timeline-description">{event.description}</p>

          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
