import React from 'react';
import './ProjectsDisplay.css';

const ProjectItem = ({ title, imageUrl,description , projectLink }) => {
  return (
    <div className="portfolio-item-wrap">
      <div className="portfolio-item">
        <div className="portfolio-item-image">
          <a href={projectLink}>
            <img src={imageUrl} alt={title} />
          </a>
        </div>
        <div className="portfolio-item-details">
          <h3 className="portfolio-item-headline">{title}</h3>
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
