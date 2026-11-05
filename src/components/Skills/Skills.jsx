import React from "react";
import "./Skills.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = ["C++", "Rust", "TypeScript", "Python"];
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const boxRef = useRef(null);

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      rotation: 20,
      scale: 1.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotation: 0,
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <ul>
          {skills.map((skill, index) => (
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
