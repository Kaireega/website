import React from "react";
import "./Skills.css";
import JavaLogo from "../../assets/icons/java-svgrepo-com.svg";
import PythonLogo from "../../assets/icons/python-svgrepo-com.svg";
import SQLLogo from "../../assets/icons/sql-svgrepo-com.svg";
import JupyterLogo from "../../assets/icons/logo-jupyter-svgrepo-com.svg";
import SpringBootLogo from "../../assets/icons/Spring_Boot.svg";
import PandasLogo from "../../assets/icons/pandas-svgrepo-com.svg";
import MacOSLogo from "../../assets/icons/apple-svgrepo-com.svg";
import WindowOS from "../../assets/icons/Windows_Logo.svg";
import Reactt from "../../assets/icons/React-icon.svg";
import Microsoft from "../../assets/icons/Microsoft_logo.svg";


const skillsData = [
  { name: "Java", icon: JavaLogo, relative: true },
  { name: "Python", icon: PythonLogo, relative: true },
  { name: "SQL", icon: SQLLogo, relative: false },
  { name: "Jupyter Notebooks", icon: JupyterLogo, relative: false },
  { name: "Spring Boot", icon: SpringBootLogo, relative: true },
  { name: "Pandas", icon: PandasLogo, relative: true },
  { name: "MacOS", icon: MacOSLogo, relative: true },
  { name: "WindowOS", icon: WindowOS, relative: false },
  { name: "React.js", icon: Reactt, relative: true },
  { name: "Microsoft", icon: Microsoft, relative: false },
];
function Skills  ()  {
  return (
    <div className="skills-container">
    <h1 className="skills-title">Skills</h1>
    <div className="skills-grid">
      {skillsData.map((skill, index,  ) => (
        <SkillCard key={index} name={skill.name} icon={skill.icon} relative={skill.relative} />
      ))}
    </div>
    </div>
  );
};

const SkillCard = ({ name, icon,relative }) => {
  return (
    <div
    className={`skill-card ${relative ? "relative-position" : ""}`}
    style={relative ? { position: "relative" } : {}}
  >
      <img src={icon} alt={`${name} Icon`} />
      <span>{name}</span>
    </div>
  );
};

export default Skills;
