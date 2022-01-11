import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="rslides_container">
        <ul className="rslides" id="slider1">
          <li>
            <div className="banner-img">
              <div className="bs-slider-overlay">
                <div className="banner-info text-center">
                  <span className="fas fa-taxi"></span>
                  <h1>24/7 Taxi Service </h1>
                  <h2 className="mb-5">
                    <i className="fas fa-phone"></i> 12(00) 123 1234
                  </h2>
                  <Link to="booking.html">Book Now </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="banner-img one">
              <div className="bs-slider-overlay">
                <div className="banner-info text-center">
                  <span className="fas fa-taxi"></span>
                  <h4>Online Cab Booking</h4>
                  <h5 className="mb-5">No Extra Charges</h5>
                  <Link to="booking.html">Book Now </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="banner-img two">
              <div className="bs-slider-overlay">
                <div className="banner-info text-center">
                  <span className="fas fa-taxi"></span>
                  <h4>Reach Your Destination</h4>
                  <h5 className="mb-5">Within Exact Time </h5>
                  <Link to="booking.html">Book Now </Link>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="banner-img three">
              <div className="bs-slider-overlay">
                <div className="banner-info text-center">
                  <span className="fas fa-taxi"></span>
                  <h4>Travel Safe & Secure</h4>
                  <h5 className="mb-5">Assured Cab Service</h5>
                  <Link to="booking.html">Book Now </Link>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
