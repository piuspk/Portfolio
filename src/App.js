import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/dist/jquery.min.js';
import Header from './files/Header';
import './App.css';
import Navbar from './files/Navbar';
// import Particles from 'react-particles-js';  


function App() {
  return (
    <>
      
        {/* <Particles
       
          params={{
            particles: {
              number: {
                value: '#000000',
                density:{
                  enable:true,
                  value_area:900
                }
              },
            },
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
            },
          }}
        /> */}
  
      <Navbar />
      <Header />
    </>
  );
}

export default App;
