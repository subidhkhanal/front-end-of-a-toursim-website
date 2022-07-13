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
              <img className="ss" src="https://www.himalayanheli.com/images/loader-logo.png" alt="Company-Logo"/>
                <div className="he1">
                  <h1 className="BigCarousel--heading text-[2em]"> Himalayan Heli Services</h1>
                  <h3>“HEAVEN IS A MYTH, BUT NEPAL IS REAL".</h3>
                </div>
            </div>
          </div>
          <div className="bigcarousel__col-md-12">
            <p>Air Dynasty Heli Services Pvt. Ltd. one of the largest Private Sector Helicopter Charter Companies in Nepal. with its own fleet of AS 350 Series has been providing safe, reliable and comfortable services to customers since 1993 A. D. We provide service with our fleet of helicopters that are certified to fly from 16,000 feet to 20,000 feet AMSL. Each aircraft can normally accommodate 5 adult passengers subjective of altitude and temperature at the landing site. </p>
            <br/>
            <p>Air Dynasty Heli Services Pvt. Ltd. one of the largest Private Sector Helicopter Charter Companies in Nepal. with its own fleet of AS 350 Series has been providing safe, reliable and comfortable services to customers since 1993 A. D. We provide service with our fleet of helicopters that are certified to fly from 16,000 feet to 20,000 feet AMSL. Each aircraft can normally accommodate 5 adult passengers subjective of altitude and temperature at the landing site.</p>
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
