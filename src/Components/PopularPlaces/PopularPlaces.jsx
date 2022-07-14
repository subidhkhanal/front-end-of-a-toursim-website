import React from 'react';
import placecss from './PopularPlaces.module.scss';
import Card from './Card';

const data = [
  {
    id: 1,
    img: 'https://images.pexels.com/photos/3737179/pexels-photo-3737179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mt.Everest',
  },
  {
    id: 2,
    img: 'https://images.pexels.com/photos/4032145/pexels-photo-4032145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mt.Kanchenjunga',
  },
  // {
  //   id: 3,
  //   img: 'https://i.pinimg.com/474x/3f/81/ac/3f81accdfb3743a1291acaafe654c717.jpg',
  //   title: 'Amritsar',
  // },
  // {
  //   id: 4,
  //   img: 'https://images.pexels.com/photos/5499902/pexels-photo-5499902.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //   title: 'Agra',
  // },
  {
    id: 5,
    img: 'https://images.pexels.com/photos/5170864/pexels-photo-5170864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Mt.Lhotse',
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1612292741055-612f12bd0e50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVhY2VmdWwlMjBsYWtlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    title: 'Rara Lake',
  },
  {
    id: 7,
    img: 'https://images.unsplash.com/photo-1625464264698-fdd9961710dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    title: 'Muktinath',
  },
  {
    id: 8,
    img: 'https://thumbs.dreamstime.com/b/lakes-nepal-gosainkunda-blue-sky-national-park-gosain-kunda-peace-environment-mountaintop-stone-212492398.jpg',
    title: 'Gosainkunda  ',
  },
  {
    id: 9,
    img: 'https://images.pexels.com/photos/6730935/pexels-photo-6730935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    title: 'Patan',
  },
  {
    id: 10,
    img: 'https://images.unsplash.com/photo-1535280783-cd33989a9522?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1901&q=80',
    title: 'Pokhara',
  },
  {
    id: 11,
    img: 'https://images.pexels.com/photos/7919635/pexels-photo-7919635.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    title: 'Pashupati Temple',
  },
  {
    id: 12,
    img: 'https://images.unsplash.com/flagged/photo-1579201661176-1e69dabbb98c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80',
    title: 'Simalchaur Syampati',
  },
];

const PopularPlaces = () => {
  return (
    <div className={placecss.popularplacescontainer}>
      <h1 style={{ fontSize: '36px',textAlign: 'center', marginTop: '3%' ,marginBottom:"2%" }}>Popular Destination</h1>
      <div className={placecss.cardcontainer}>
        {data.map((card, index) => (
          <Card title={card.title} key={index} imageurl={card.img} />
        ))}
      </div>
    </div>
  );
};

export default PopularPlaces;