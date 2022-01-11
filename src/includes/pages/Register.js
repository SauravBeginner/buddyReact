import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [phone, setPhone] = useState("");
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setcPassword] = useState("");
  let [isErr, setIsErr] = useState(false);
  let [isCorrect, setIsCorrect] = useState(false);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal1"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Register your account
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
              <div>
                {isErr ? (
                  <div class="alert alert-danger">
                    <strong>Error!</strong> Invalid Login!
                  </div>
                ) : (
                  ""
                )}
                {isCorrect ? (
                  <div class="alert alert-success">
                    <strong>Succesfull!</strong> Login!
                  </div>
                ) : (
                  ""
                )}
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    name="Name"
                    id="recipient-rname"
                    required=""
                    onChange={(event) => {
                      setFname(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-name" className="col-form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="Name"
                    id="recipient-rname"
                    required=""
                    onChange={(event) => {
                      setLname(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-email" className="col-form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    id="recipient-email"
                    required=""
                    onChange={(event) => {
                      setMail(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="recipient-phone" className="col-form-label">
                    Mobile
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="Name"
                    id="recipient-rname"
                    required=""
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="password1" className="col-form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="Password"
                    id="password1"
                    required=""
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="password2" className="col-form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    name="Confirm Password"
                    id="password2"
                    required=""
                    onChange={(event) => {
                      setcPassword(event.target.value);
                    }}
                  />
                </div>
                <div className="sub-w3l">
                  <div className="sub-agile">
                    <input type="checkbox" id="brand2" value="" />
                    <label for="brand2" className="mb-3">
                      <span></span>I Accept to the Terms & Conditions
                    </label>
                  </div>
                </div>
                <div className="right-w3l">
                  <button
                    className="btn btn-primary form-control"
                    onClick={async () => {
                      var fd = new FormData();
                      fd.append("fname", fname);
                      fd.append("lname", lname);
                      fd.append("phone", phone);
                      fd.append("mail", mail);
                      fd.append("password", password);
                      fd.append("cpassword", cpassword);

                      var result = await fetch(
                        "http://localhost:5000/customer/cadd",
                        {
                          method: "POST",
                          body: fd,
                        }
                      );
                      var data = await result.json();
                      console.log(result);
                      if (data.err == "Invalid") {
                        setIsCorrect(false);
                        setIsErr(true);
                      } else {
                        setIsErr(false);
                        setIsCorrect(true);
                      }
                    }}
                  >
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
