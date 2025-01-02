import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsDisplay.css';
import Rewire from '../../assets//projectImages/Rewire.png';

const portfolioData = [
  {
    id: 1,
    title: 'Revive (Cognitive Behavioral Therapy Application)',
    imageUrl: Rewire,
    description:'',

    
  },
  {
    id: 2,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    description:'',

   
  },
  {
    id: 3,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    description:'',
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
