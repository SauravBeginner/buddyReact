import React from "react";
import { Link } from "react-router-dom";
const Top = () => {
  return (
    <>
      <div className="top-bar_sub_w3layouts container-fluid">
        <div className="row">
          <div className="col-md-4 col-sm-6 log-icons mt-2">
            <p className="py-2">
              <i className="fas fa-phone"></i> Call Taxi : 12(00) 123 1234
            </p>
          </div>

          <div className="col-md-4 col-sm-6 logo">
            <Link className="navbar-brand" to="index.html">
              <i className="fas fa-taxi"></i> Taxi Cab
            </Link>
          </div>

          <div className="col-md-4 top-forms mt-md-3 mt-2 mb-md-0 mb-3">
            <span className="mx-lg-4 mx-md-2  mx-1">
              <Link
                to="/login"
                data-toggle="modal"
                aria-pressed="false"
                data-target="#exampleModal"
              >
                <i className="fas fa-lock"></i> Sign In
              </Link>
            </span>
            <span>
              <Link
                to="/register"
                data-toggle="modal"
                data-target="#exampleModal1"
              >
                <i className="fas fa-user"></i> Register
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top;
