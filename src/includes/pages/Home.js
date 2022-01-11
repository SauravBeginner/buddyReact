import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <header>
        <div id="wrapper">
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
                      <Link to="/booking">Book Now </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="container py-lg-5 py-3">
        <h3 className="heading text-capitalize text-center">Welcome</h3>
        <h5 className="heading mb-5 text-center">Taxi Cab</h5>
        <div className="about-head text-center ">
          <div className="row about-grids-top mb-5">
            <div className="col-lg-2 col-sm-4 col-6 about-grid p-0">
              <i className="fas fa-money-bill-alt" aria-hidden="true"></i>
              <h4>Low Charges</h4>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 about-grid p-0">
              <i className="fa fa-users" aria-hidden="true"></i>
              <h4>Safe & Secure</h4>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mt-sm-0 mt-5 about-grid p-0">
              <i className="fa fa-road" aria-hidden="true"></i>
              <h4>Traffic Roads</h4>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mt-lg-0 mt-5 about-grid p-0">
              <i className="fa fa-taxi" aria-hidden="true"></i>
              <h4>Taxi Cabs</h4>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mt-lg-0 mt-5 about-grid p-0">
              <i className="fa fa-cogs" aria-hidden="true"></i>
              <h4>24/7 Service</h4>
            </div>
            <div className="col-lg-2 col-sm-4 col-6 mt-lg-0 mt-5 about-grid p-0">
              <i className="fa fa-smile" aria-hidden="true"></i>
              <h4>Customers</h4>
            </div>
          </div>
          <div className="row about-grids-bottom text-left">
            <div className="col-md-4 mb-md-0 mb-5 about-bottom-grid">
              <h4 className="mb-4">
                Lorem ipsum dolor sit amet, In consectetur adipiscing elit.
                Etiam commodo urna dolor,
              </h4>
              <Link to="about.html"> More About Us</Link>
            </div>
            <div className="col-md-4 about-bottom-grid">
              <p>
                Lorem ipsum dolor sit init amet, consectetur elit adipiscing
                elit. Etiam commodo urna dolor, eget lacinia est aliquam id.
                Proin velit libero, vestibul umac orci eu, faucibus consectetur
                dolor. Cras ullamcorper elit eros, nec bibendum lacus accumsan
                eu. Donec non{" "}
              </p>
            </div>
            <div className="col-md-4 about-bottom-grid">
              <p>
                Lorem ipsum dolor sit init amet, consectetur elit adipiscing
                elit. Etiam commodo urna dolor, eget lacinia est aliquam id.
                Proin velit libero, vestibul umac orci eu, faucibus consectetur
                dolor. Cras ullamcorper elit eros, nec bibendum lacus accumsan
                eu. Donec non{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className=" py-5">
        <div className="container py-lg-5">
          <h3 className="heading text-capitalize text-center">Our Taxi Cars</h3>
          <h5 className="heading mb-5 text-center">Taxi Cab</h5>
          <div id="/" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/1.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Mini Taxi
                    </h5>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/2.png" alt="Image" />
                      <h5 className="my-2 text-center text-uppercase">
                        Prime Taxi
                      </h5>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/3.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Sedan Taxi{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/1.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Mini Taxi{" "}
                    </h5>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/2.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Prime Taxi{" "}
                    </h5>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/3.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Sedan Taxi{" "}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/1.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Mini Taxi
                    </h5>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/2.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Prime Taxi
                    </h5>
                  </div>
                  <div className="col-md-4 col-sm-6 slidering">
                    <div className="thumbnail">
                      <img src="images/3.png" alt="Image" />
                    </div>
                    <h5 className="my-2 text-center text-uppercase">
                      Sedan Taxi
                    </h5>
                  </div>
                </div>
                f
              </div>
            </div>
            <Link
              className="carousel-control-prev"
              to="/"
              role="button"
              data-slide="prev"
            >
              <span className="fa fa-chevron-left" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </Link>
            <Link
              className="carousel-control-next"
              to="#/"
              role="button"
              data-slide="next"
            >
              <span className="fa fa-chevron-right" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
