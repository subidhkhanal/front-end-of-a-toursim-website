import React from 'react';
import './homepage.scss';
import './homepage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <video src="./assets/videos/nature-video.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h4 className="text-7xl">Nepal Chopper Service</h4>
        <h3 className="font-thin text-xs">Best Place For Helicopter Service </h3>
        <a href="">
          Helicopter Tour
        </a>
      </div>
    </div>
  );
};

export default HomePage;
