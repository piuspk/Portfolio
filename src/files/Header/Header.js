import React from 'react';
import Typed from 'react-typed';
 import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="background-overlay"></div>
      
      <div className="main-info">
        <h1>Hello👋! I am Piyush</h1>
        <h6>CSE Undergraduate at IIT Ropar🎓</h6>
        <Typed
          className="typed-text"
          strings={["Graphic Designing", "Photography", "Web designing"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <br/>
        <span>
          <a href="#contacts" className="btn-main-offer">Contact</a>
          <a href="#" className="btn-my-work">My Work</a>
        </span>
      </div>
    </div>
  );
}

export default Header;
