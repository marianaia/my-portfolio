import React from 'react';
import './Skills.css';

const skills = ['C#.NET', 'TypeScript', 'React.js', 'Python', 'HTML / CSS'];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;