import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Journal Expenses',
    description: 'It allows users to securely register and log in, create transactions and manage their income and expenses. Including JWT authentication, ASP.NET Core and React.js.',
    link: 'https://github.com/marianaia/Finances'
  },
  {
    title: 'Notes & Tasks',
    description: 'Fullstack project with a Rust backend and PostgreSQL database for creating, editing, and managing notes. Orchestrated with Docker Compose for deployment and management. User interface for handling, note creation, editing, and deletion.',
    link: 'https://github.com/marianaia/Notes'
  },
  {
    title: 'Shape detection',
    description: 'This project detects and classifies shapes in imported images using Python and image processing techniques ( Canny edge detection algorithm ).',
    link: 'https://github.com/marianaia/shape-detection'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="project-grid">
          {projects.map((project, index) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card border border-gray-200 group relative flex flex-col justify-between rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl focus:outline-none"
              key={index}
            >
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-6 line-clamp-3 text-left">
                  {project.description}
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center text-xs font-medium text-green-700">
                <span>View on GitHub</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 ml-1"></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;