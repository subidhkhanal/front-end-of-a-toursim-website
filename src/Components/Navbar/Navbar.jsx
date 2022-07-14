import React, { useEffect, useState } from 'react';
import './Navbar.scss';
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import MenuIcon from '@mui/icons-material/Menu';


const Navbar = () => {
  const [show,setShow]=useState(false)
  const [userIsMobile,setUserIsMobile]=useState(false)
  useEffect(() => {
    window.innerWidth < 836 ? setUserIsMobile(true) : setUserIsMobile(false);
  }, [userIsMobile]);

  const transitionNavBar= () =>{
    if(window.scrollY>300){
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
    <div className={`abc ${show && "nav_black"}`}>
      {userIsMobile ?
        <div className="flex justify-end py-[10px]">
          <MenuIcon className="mr-[3px]"/><h1 className="mr-[5px]">Menu</h1>
        </div>:
        <div className="nav-bar" >
          <div className="first-menu">
            <ul className="nav-menu">
              <div className="Home items">
                <li className="without-any-link cursor-pointer">Home</li>
              </div>
              <div
                className="des items">
            <li>
              Trekking<FontAwesomeIcon icon={faCaretDown} className="pl-[4px]"/>
            </li>
          </div>
          <div
            className="exp items"
          >
            <li>
              Tour Package
              <FontAwesomeIcon icon={faCaretDown} className="pl-[4px]"/>
            </li>
          </div>
          <div
            className="gallery items"
          >
            <li>
              Day Tour
              <FontAwesomeIcon icon={faCaretDown} className="pl-[4px]"/>
            </li>
          </div>
        </ul>
      </div>
          <div className="h-[80px]  mr-[30px]">
            <img
              className="cursor-pointer"
              src="https://www.himalayanheli.com/images/loader-logo.png"
              alt="logo"
              id="navbarImg"
            />
          </div>
        <div className="third-menu">
        <ul className="nav-menu">
          <div className="trav items">
            <li>
              Peak Climbing
              <FontAwesomeIcon icon={faCaretDown} className="pl-[4px]" />
            </li>
          </div> <div className="trav items">
            <li>
              Blog
              <FontAwesomeIcon icon={faCaretDown} className="pl-[4px]"/>
            </li>
          </div>
          <div className="trav items">
            <li>About US</li>
          </div>
          <div className="trav items">
            <li>Contact US</li>
          </div>
        </ul>
      </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
