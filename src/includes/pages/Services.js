import React from "react";

const Services = () => {
  return (
    <>
      <div class="banner" id="home"></div>
      <section className="services py-5">
        <div className="container py-lg-5">
          <h1 className="heading text-capitalize text-center">Our Services</h1>
          <h5 className="heading mb-5 text-center">Taxi Cab</h5>
          <div className="row service-grids">
            <div className="col-lg-4">
              <h3 className="text-capitalize mb-3">
                We have a range of vehicles
              </h3>
              <p className="mb-3">
                Vestibulum et augue eu nibh tincidunt pretium vitae eget purus.
                Pellentesque necist urna eleifend, semper eros sed, sollicitudin
                justo. Nam finibus sollicitudin enim, nec blan ditmi laoreet
                sed. Morbi auctor purus ac ligula aliquetis vestibulum. Quisque
                vitae sollicitu dinet augue eu pretium vitae.
              </p>
            </div>
            <div className="col-lg-2 col-6">
              <img src="images/1.png" alt="" className="img-fluid" />
              <img src="images/2.png" alt="" className="img-fluid" />
              <img src="images/3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-2 col-6">
              <img src="images/3.png" alt="" className="img-fluid" />
              <img src="images/1.png" alt="" className="img-fluid" />
              <img src="images/2.png" alt="" className="img-fluid" />
            </div>
            <div className="col-lg-4">
              <h4 className="text-capitalize">
                <i className="fas fa-taxi clr1"></i>Luxury Cars
              </h4>
              <p className="mb-4"> Vestibulum et augue eunibh metus diam.</p>
              <h4 className="text-capitalize">
                <i className="fas fa-bus clr2"></i>Luxury Vans
              </h4>
              <p className="mb-4"> Vestibulum et augue eunibh metus diam.</p>
              <h4 className="text-capitalize">
                <i className="fas fa-car clr3"></i>Luxury Elite
              </h4>
              <p className="mb-4">
                Vestibulum et augue eunibh metus diam laoreet.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
