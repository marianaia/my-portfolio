import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Journal Expenses',
    description: 'It allows users to securely register and log in, create transactions and manage their income and expenses. Including JWT authentication, ASP.NET Core and React.js',
    link: 'https://github.com/marianaia/Finances'
  },
  {
    title: 'Notes & Tasks',
    description: 'Full-stack project that stores your notes. The Rust backend and PostgreSQL for data storage. Orchestrated with Docker Compose for deployment and management. User interface for handling, note creation, editing, and deletion.',
    link: 'https://github.com/marianaia/Notes'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;