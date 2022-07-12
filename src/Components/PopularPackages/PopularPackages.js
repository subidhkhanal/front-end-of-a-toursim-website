import React from 'react';
import './PopularPackages.css'
import PopularPackagesCollection from './PopularPackages-x/PopularPackagesCollection'
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

function PopularPackages() {
  return (
    <div>
      <div className="popularpackages__col-md-12">
        <div className="popularpackages__title">
          <h1>Popular Packages</h1>
          <p>The Best Packages that we have in offer:</p>
        </div>
      </div>

      <div className="flex ml-10 mr-20">
        <PopularPackagesCollection  />
        <PopularPackagesCollection />
        <PopularPackagesCollection/>
      </div>
      <div className="popularpackages__col-md-12">
        <div className="popularpackages__all-link">
          <button className="hover:bg-blue-900">
            VIEW ALL PACKAGES
            <DoubleArrowIcon  className="mb-1.5"/>
          </button>
        </div>
    </div>
    </div>
  );
}

export default PopularPackages;