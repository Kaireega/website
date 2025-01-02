import React from 'react';
import './ProjectsDisplay.css';

const ProjectItem = ({ title, imageUrl,description , projectLink, }) => {
  return (
    <div className="portfolio-item-wrap">
      <div className="portfolio-item">
        <div className="portfolio-item-image">
          
            <img src={imageUrl} alt={title} />
         
        </div>
        <div className="portfolio-item-details">
        <h3 className="project-title">
          {projectLink ? (
              <a href={projectLink} target="_blank" rel="noopener noreferrer">{title}</a>) : (title)}
        </h3>
          <p className="portfolio-item-description">{description}</p>
          {/* <div className="show-project">
            <a href={projectLink}>Show Project</a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
