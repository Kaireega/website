import React,{useState} from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsDisplay.css';
import Rewire from '../../assets//projectImages/Rewire.png';
import forexdash from '../../assets//projectImages/forexdash.png';
import jobs from '../../assets//projectImages/jobs.png';


const portfolioData = [
  {
    id: 1,
    title: 'Revive (Cognitive Behavioral Therapy Application)',
    imageUrl: Rewire,
    description:` a web application created to support Cognitive Behavioral Therapy (CBT). CBT is a form of therapy that helps individuals
     identify and change negative thought patterns and behaviors. This project simplifies the management of CBT 
     records by providing a user-friendly platform for storing and accessing therapy-related information. Developed
      during an internship at ThoughtWorks, the application reflects a focus on building tools that enhance mental health care through technology.`,
      projectLink:'https://github.com/Kaireega/ThoughtWorks-internship-mainProjects-',

    
  },
  {
    id: 2,
    title: 'Forex Dash',
    imageUrl: forexdash,
    description: ` An open-source automated trading system designed to analyze and execute Forex trading strategies.
     It features real-time data scraping, technical analysis indicators, and automated trade execution. The bot is structured into
      various modules, including data analysis, API interactions, trading logic, and a dashboard for monitoring performance.`,
      projectLink:'https://github.com/Kaireega/forex_bot',

   
  },
  {
    id: 3,
    title: 'Indeed Job Scraping script',
    imageUrl: jobs,
    description:`The Job Scraping Application is a Spring Boot application that scrapes job listings from Indeed.com based 
    on a specified job title and number of pages. It collects job titles, company names, and job URLs, and stores them in a
     PostgreSQL database. The application also provides a REST API to perform job searches and retrieve the data.`,
     projectLink:'https://github.com/Kaireega/jobScraping',
  },
  
  // Add more portfolio items as needed
];

function ProjectDisplay () {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
    <div className='portfolio-container'>
      <h1 className="portfolio-title">Projects</h1>
      <div className="portfolio-grid">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="project-item-wrapper"
            onClick={() => openModal(item.imageUrl)}
          >
            <ProjectItem {...item} />
          </div>
        ))}
        {selectedImage && (
              <div className="modal" onClick={closeModal}>
                <div className="modal-content" >
                  <img src={selectedImage} alt="Enlarged Project" onClick={(e) => e.stopPropagation()}/>
                  <button className="close-button" onClick={closeModal}>
                    Close
                  </button>
                </div>
          </div>
        )}
      </div>
  
    </div>
  );
};

export default ProjectDisplay;
