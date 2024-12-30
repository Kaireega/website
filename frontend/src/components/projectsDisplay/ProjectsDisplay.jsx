import React from 'react';
import ProjectItem from './ProjectItem';
import './ProjectsDisplay.css';

const portfolioData = [
  {
    id: 1,
    title: 'Flight Local (B2B Travel Solution)',
    imageUrl: 'https://tamalsen.dev/wp-content/uploads/2021/11/flighlocal-cover-image.jpg',
    category: 'Web Development',
    projectLink: '#',
    categoryLink: '#',
  },
  {
    id: 2,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    category: 'App Development',
    projectLink: '#',
    categoryLink: '#',
  },
  {
    id: 3,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    category: 'App Development',
    projectLink: '#',
    categoryLink: '#',
  },
  {
    id: 4,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    category: 'App Development',
    projectLink: '#',
    categoryLink: '#',
  },
  {
    id: 5,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    category: 'App Development',
    projectLink: '#',
    categoryLink: '#',
  },
  {
    id: 6,
    title: 'Another Project',
    imageUrl: 'https://via.placeholder.com/300',
    category: 'App Development',
    projectLink: '#',
    categoryLink: '#',
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
