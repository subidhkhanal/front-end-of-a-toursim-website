import React from 'react';
import './Review.css'

function Review() {
  return (
    <div className="testi" id="my-testi">
      <div className="container">
        <div className="title flex flex-col">
          <h2>" Our Happy Clients "</h2>
          <p>Read about our service feedback from our valued customers</p>
        </div>
        <div className="responsive slick-dotted slick-slider slick-initialized">
          <div data-aos="zoom-in" data-aos-duration="1000" className="res-1 res-2">
            <div className="testi-down">
              <div className="all">
                <div className="test-img">
                  <img className="my-expert" src="images/t1.jpg" />
                </div>
              </div>
              <div className="star">
                <h2><span>Suman Thapa</span></h2>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h1>"</h1>
            </div>
            <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco </p>

          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="res-1 res-2">
            <div className="testi-down">
              <div className="all">
                <div className="test-img">
                  <img className="my-expert" src="images/t2.jpg" />
                </div>
              </div>
              <div className="star">
                <h2><span>Robert Jonson</span></h2>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h1>"</h1>
            </div>
            <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. </p>

          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="res-1 res-2">
            <div className="testi-down">
              <div className="all">
                <div className="test-img">
                  <img className="my-expert" src="images/t3.jpg" />
                </div>
              </div>
              <div className="star">
                <h2><span>Kim Jacson</span></h2>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h1>"</h1>
            </div>
            <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco </p>

          </div>
          <div data-aos="zoom-in" data-aos-duration="1000" className="res-1 res-2">
            <div className="testi-down">
              <div className="all">
                <div className="test-img">
                  <img className="my-expert" src="images/t4.jpg" />
                </div>
              </div>
              <div className="star">
                <h2><span>Michel Obama</span></h2>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <h1>"</h1>
            </div>
            <p> ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco </p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;