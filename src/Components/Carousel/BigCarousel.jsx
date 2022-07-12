import React from 'react';
import'./BigCarousel.css'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const BigCarousel = () => {

  return (
    <div className="welcome">
      <div className="container">
        <div className="row">
          <div className="bigcarousel__col-md-12">
            <div className="title">
              <img className="max-h-32" src="https://www.himalayanheli.com/images/loader-logo.png" alt="Company-Logo"/>
                <div className="he1">
                  <h1 className="heading"> Himalayan Heli Services</h1>
                  <h3>“HEAVEN IS A MYTH, BUT NEPAL IS REAL".</h3>
                </div>
            </div>
          </div>
          <div className="bigcarousel__col-md-12">
            <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation  ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute </p>
            <br/>
            <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute </p>
            <div className="link">
              <button>Read More  <DoubleArrowIcon  className="mb-1.5"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigCarousel;
