import React from 'react';
import './About.css';
import aboutImage from './bg.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <h2>About Me</h2>
          <p>
           Hello👋, I'm Piyush Kumar, a second-year student at Indian Institute of Technology Ropar🏫.
           <br/>
          I love photography, editing, and graphic designing. Currently, I'm focusing on DSA, competitive programming, and exploring web development.
          </p>
          <div class="circular--portrait"> <img src={aboutImage} /> </div>
        </div>
      </div>
    </section>
  );
};

export default About;
