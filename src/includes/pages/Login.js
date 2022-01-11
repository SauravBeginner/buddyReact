import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign In to your account
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="#" method="post">
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="User Name"
                    name="Name"
                    id="recipient-name"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    id="password"
                    required=""
                  />
                </div>
                <div className="row sub-w3l my-3">
                  <div className="col sub-agile">
                    <input type="checkbox" id="brand1" value="" />
                    <label for="brand1" className="text-white">
                      <span></span>Remember me?
                    </label>
                  </div>
                  <div className="col forgot-w3l text-right">
                    <Link to="#" className="text-white">
                      Forgot Password?
                    </Link>
                  </div>
                </div>
                <div className="right-w3l">
                  <input
                    type="submit"
                    className="form-control"
                    value="Sign In"
                  />
                </div>
                <p className="text-center dont-do text-white mt-3">
                  Don't have an account?
                  <Link
                    to="#"
                    data-toggle="modal"
                    data-target="#exampleModal1"
                    className="text-white"
                  >
                    Register Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
