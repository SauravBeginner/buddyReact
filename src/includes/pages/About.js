import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="banner" id="home"></div>
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
                      Mini Taxi{" "}
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
      <section className="about py-5">
        <div className="services-bottom stats py-5">
          <div className="container py-lg-5 pb-3">
            <h2 className="heading text-capitalize text-center">Our Stats</h2>
            <h5 className="heading mb-5 text-center">Taxi Cab</h5>
            <div className="row wthree-agile-counter">
              <div className="col-sm-3 col-6 w3_agile_stats_grid-top">
                <div className="w3_agile_stats_grid">
                  <div className="agile_count_grid_left">
                    <span className="fa fa-taxi" aria-hidden="true"></span>
                  </div>
                  <div className="agile_count_grid_right">
                    <p className="counter">324</p>
                  </div>
                  <div className="clearfix"> </div>
                  <h4>No: of Cabs</h4>
                </div>
              </div>
              <div className="col-sm-3 col-6 w3_agile_stats_grid-top">
                <div className="w3_agile_stats_grid">
                  <div className="agile_count_grid_left">
                    <span className="fa fa-road" aria-hidden="true"></span>
                  </div>
                  <div className="agile_count_grid_right">
                    <p className="counter">543</p>
                  </div>
                  <div className="clearfix"> </div>
                  <h4>Cab Routes</h4>
                </div>
              </div>
              <div className="col-sm-3 col-6 mt-sm-0 mt-5 w3_agile_stats_grid-top">
                <div className="w3_agile_stats_grid">
                  <div className="agile_count_grid_left">
                    <span
                      className="fas fa-money-bill-alt"
                      aria-hidden="true"
                    ></span>
                  </div>
                  <div className="agile_count_grid_right">
                    <p className="counter">434</p>
                  </div>
                  <div className="clearfix"> </div>
                  <h4>Low Fares</h4>
                </div>
              </div>
              <div className="col-sm-3 col-6 mt-sm-0 mt-5 w3_agile_stats_grid-top">
                <div className="w3_agile_stats_grid">
                  <div className="agile_count_grid_left">
                    <span className="fa fa-cogs" aria-hidden="true"></span>
                  </div>
                  <div className="agile_count_grid_right">
                    <p className="counter">234</p>
                  </div>
                  <div className="clearfix"> </div>
                  <h4>24/7 Service</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
