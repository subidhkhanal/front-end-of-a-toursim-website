import React from 'react';
import './homepage.scss';
import './homepage.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <video src="./assets/videos/nature-video.mp4" muted loop autoPlay></video>
      <div className="overlay"></div>
      <div className="text">
        <h4 className="text-7xl pb-[4px]">Nepal Chopper Service</h4>
        <h3 className="font-thin text-sm">Best Place For Helicopter Service </h3>
        <a className="bg-teal-500 rounded-2xl"	href="">
          Helicopter Tour
        </a>
      </div>
    </div>
  );
};

export default HomePage;
