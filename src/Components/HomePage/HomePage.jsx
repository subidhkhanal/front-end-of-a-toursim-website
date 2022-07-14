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
        <a className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-3xl text-lg"	href="">
          Helicopter Tour
        </a>
      </div>
    </div>
  );
};

export default HomePage;
