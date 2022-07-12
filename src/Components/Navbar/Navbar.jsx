import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const[show,setShow]=useState(false)

  const transitionNavBar= () =>{
    if(window.scrollY>500){
      setShow(true)
    }
    else{
      setShow(false)
    }
  }
  useEffect(() =>{
    window.addEventListener("scroll",transitionNavBar)
    return() => window.removeEventListener("scroll",transitionNavBar)
  },[])

  return (
    <div className={`nav-bar ${show && "nav_black"}`}>
      <div className="first-menu">
        <ul className="nav-menu">
          <li className="without-any-link">Home</li>
          <div
            className="des items"
          >
            <li>
              Trekking <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </div>
          <div
            className="exp items"
          >
            <li>
              Tour Package
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </div>
          <div
            className="gallery items"
          >
            <li>
              Day Tour
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </div>
        </ul>
      </div>

      <img
        className="cursor-pointer"
        src="https://www.himalayanheli.com/images/loader-logo.png"
        alt="logo"
        id="navbarImg"
      />
      <div className="third-menu">
        <ul className="nav-menu">
          <div
            className="trav items"
          >
            <li>
              Peak Climbing
              <FontAwesomeIcon icon={faCaretDown} />
            </li>
          </div>
          <li className="without-any-link"> Blog</li>
          <li className="without-any-link"> About</li>
          <li className="without-any-link"> Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
