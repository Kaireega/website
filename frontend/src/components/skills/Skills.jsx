import React from "react";
import "./Skills.css";
import JavaLogo from "../../assets/icons/java-svgrepo-com.svg";
import PythonLogo from "../../assets/icons/python-svgrepo-com.svg";
import SQLLogo from "../../assets/icons/sql-svgrepo-com.svg";
import JupyterLogo from "../../assets/icons/logo-jupyter-svgrepo-com.svg";
import SpringBootLogo from "../../assets/icons/Spring_Boot.svg";
import PandasLogo from "../../assets/icons/pandas-svgrepo-com.svg";
import MacOSLogo from "../../assets/icons/apple-svgrepo-com.svg";

const skillsData = [
  { name: "Java", icon: JavaLogo, relative: true },
  { name: "Python", icon: PythonLogo, relative: true },
  { name: "SQL", icon: SQLLogo, relative: false },
  { name: "Jupyter Notebooks", icon: JupyterLogo, relative: true },
  { name: "Spring Boot", icon: SpringBootLogo, relative: true },
  { name: "Pandas", icon: PandasLogo, relative: true },
  { name: "MacOS", icon: MacOSLogo, relative: false },
];
function Skills  ()  {
  return (
    <div className="skills-grid">
      {skillsData.map((skill, index,  ) => (
        <SkillCard key={index} name={skill.name} icon={skill.icon} relative={skill.relative} />
      ))}
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
