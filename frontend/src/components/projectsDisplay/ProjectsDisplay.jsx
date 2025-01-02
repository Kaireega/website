import React from 'react';
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
    description:`The ThoughtWorks Internship Main Projects repository highlights a web application 
    created to support Cognitive Behavioral Therapy (CBT). CBT is a form of therapy that helps individuals
     identify and change negative thought patterns and behaviors. This project simplifies the management of CBT 
     records by providing a user-friendly platform for storing and accessing therapy-related information. Developed
      during an internship at ThoughtWorks, the application reflects a focus on building tools that enhance mental health care through technology.`,
    
  },
  {
    id: 2,
    title: 'Forex Dash',
    imageUrl: forexdash,
    description: `an advanced automated trading solution for Forex enthusiasts and professionals.
     Designed to simplify and enhance your trading experience, Forex Bot combines real-time Forex 
     data analysis, technical indicators, and seamless trade execution. Whether you're backtesting 
     strategies or executing live trades, this bot is your reliable partner in navigating the complexities 
     of the Forex market. Explore a robust feature set, from real-time data scraping to a dedicated dashboard 
     for monitoring performance. Get started today by cloning the repository, setting up your environment, and
      launching the bot with a single command. Transform your trading with Forex Bot—where precision meets automation.`,

   
  },
  {
    id: 3,
    title: 'Another Project',
    imageUrl: jobs,
    description:`The Job Scraping Application is a Spring Boot application that scrapes job listings from Indeed.com based 
    on a specified job title and number of pages. It collects job titles, company names, and job URLs, and stores them in a
     PostgreSQL database. The application also provides a REST API to perform job searches and retrieve the data.`,
  },
  
  // Add more portfolio items as needed
];

function ProjectDisplay () {
  return (
    <div className="portfolio-grid">
      {portfolioData.map((item) => (
        <ProjectItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProjectDisplay;
