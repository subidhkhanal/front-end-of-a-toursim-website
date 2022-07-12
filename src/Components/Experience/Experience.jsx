import React from 'react';
import './experience.scss';
import './experience.css'

const Experience = () => {
  const ExpCard = ({ exp }) => {
    return (
      <div className="exp-card" style={{ backgroundImage: `url(${exp.url})` }}>
        <div className="upper"></div>
        <div className="hover-name">{exp.name}</div>
        <div className="lower"></div>
        <p className="exp-name">{exp.name}</p>
      </div>
    );
  };
  const demoData = [
    {
      name: 'Type of Arts in Nepal',
      url: './assets/art.jpg',
    },
    {
      name: 'Heritage Sites in Nepal',
      url: './assets/heritage.jpg',
    },
    {
      name: 'Paragliding Places in Nepal',
      url: './assets/adventure.jpg',
    },
    {
      name: 'Top 10 Museum in World',
      url: './assets/museum.jpg',
    },
    {
      name: 'Spiritual Enlightenment',
      url: './assets/spiritual.jpg',
    },
    {
      name: 'Luxurious Places in Nepal',
      url: './assets/luxury.jpg',
    },
    {
      name: 'Food and Cuisine in Nepal',
      url: './assets/foodAndCuisine.jpg',
    },
    {
      name: 'Nature and Wildlife in Nepal',
      url: './assets/natureandwildlife.jpg',
    },
  ];
  return (
    <div className="experience">
      <h1 className="text-[2em] font-bold">Blog</h1>
      <p>Places of attractions, travel tips and activities to do in and around Nepal.<a href="" className="text-blue-500">Visit Our Blog</a></p>
      <div className="experienceCards">
        {demoData.map((exp, index) => (
          <ExpCard exp={exp} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
