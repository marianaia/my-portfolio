import React from 'react';
import './Skills.css';

const skills = ['C++', 'Rust', 'TypeScript', 'Python'];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
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