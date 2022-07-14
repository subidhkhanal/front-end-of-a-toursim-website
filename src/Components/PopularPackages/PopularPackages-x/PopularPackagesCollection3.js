import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
import './PopularPackagesCollection.css'

function PopularPackagesCollection() {
  return (
    <div className="popularpackagescollection__col-md-4">
      <div className="popularpackagescollection__package">
        <div className="popularpackagescollection__package-img">
          <div className="popularpackagescollection__featured">
            Featured
          </div>
          <div className="popularpackagescollection__discount">
            <span>45%</span>
            Off
          </div>
          <img className="rounded-t-xl" src="https://www.kbrconstructionanddevelopers.com/chopper/images/heli1.jpg" alt=""/>
        </div>
        <div className="popularpackagescollection__all-down rounded-b-xl">
          <div className="popularpackagescollection__peop">
            <h6>
              <del>$950</del>
              $900
            </h6>
          </div>
          <a href=""> Kanchenjunga Region Helicopter Tour </a>
          <p>
            <LocationOnIcon sx={{ fontSize: 20 }}/>
            <span>Nepal , Everest Region </span>
            <AccessTimeFilledIcon sx={{fontSize: 20 }}/>
            <span>16 Days</span>
          </p>
          <div className="popularpackagescollection__pack-down">
            <StarIcon className="popularpackagescollection__rating" sx={{fontSize: 20 },{color:yellow[900]}}/>
            <StarIcon className="popularpackagescollection__rating" sx={{fontSize: 20 },{color:yellow[900]}}/>
            <StarIcon className="popularpackagescollection__rating" sx={{fontSize: 20 },{color:yellow[900]}}/>
            <StarIcon className="popularpackagescollection__rating" sx={{fontSize: 20 },{color:yellow[900]}}/>
            <StarIcon className="popularpackagescollection__rating" sx={{fontSize: 20 },{color:yellow[900]}}/>
            <a href="" className="popularpackagescollection__reviews">
              <span> (5) </span> 24 Reviews </a>
          </div>
          <div>
            <h3 className="pt-1">Next Departure</h3>
          </div>
          <div className="popularpackagescollection__next-down">
            <p>
              <span>
                <AccessTimeFilledIcon sx={{fontSize: 15 }}/>
                <span>16 Jan,2022</span>
              </span>
              <span className="popularpackagescollection__line"></span>
              <span>  4 spaces left </span>
            </p>
            <p>
              <span>
                <AccessTimeFilledIcon sx={{fontSize: 15 }}/>
                <span>21 Feb,2022</span>
              </span>
              <span className="popularpackagescollection__line"></span>
              <span>  18 spaces left </span>
            </p>
          </div>
          <div className="flex justify-center">
            <a
              href="#"
              className="bg-indigo-500 mx-auto py-2 px-8 text-center font-medium text-xl rounded-3xl border-0 hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 text-white">View Details</a>

          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularPackagesCollection;