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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lobortis purus, id varius tellus.
            Suspendisse nec felis at justo hendrerit euismod sed quis velit. Phasellus tristique purus id mi
            scelerisque volutpat. Fusce vehicula ex ut arcu pulvinar sollicitudin. Integer at lacus ut elit
            vestibulum tincidunt. Duis gravida diam id venenatis finibus. Morbi euismod, lacus sit amet fermentum
            rutrum, mi purus tincidunt odio, ac posuere lorem lectus a purus. Sed ullamcorper interdum diam a
            fringilla. Nulla facilisi. Nunc fringilla enim id augue efficitur, sed venenatis elit tristique. Nunc
            scelerisque lobortis libero, a convallis nisi elementum eu. Integer tempor iaculis mauris, at feugiat
            lacus lacinia at. Donec et justo id augue pharetra feugiat ac vel justo.
          </p>
          <div class="circular--portrait"> <img src={aboutImage} /> </div>
        </div>
      </div>
    </section>
  );
};

export default About;
