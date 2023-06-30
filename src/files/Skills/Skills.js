import React from 'react';
import { FaCode, FaLaptopCode, FaPaintBrush } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  return (
    <section id="Skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Programming Languages</h3>
            <ul>
              <li>
                <FaCode /> C
              </li>
              <li>
                <FaCode /> C++
              </li>
              <li>
                <FaLaptopCode /> JavaScript
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Web Development</h3>
            <ul>
              <li>
                <FaCode /> HTML
              </li>
              <li>
                <FaCode /> CSS
              </li>
              <li>
                <FaCode /> Bootstrap
              </li>
              <li>
                <FaLaptopCode /> JavaScript
              </li>
            </ul>
          </div>
          <div className="skills-category">
            <h3>Graphic Designing</h3>
            <ul>
              <li>
                <FaPaintBrush /> Photoshop
              </li>
              <li>
                <FaPaintBrush /> Adobe illustrator
              </li>
              <li>
                <FaPaintBrush /> Adobe Lightroom
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
