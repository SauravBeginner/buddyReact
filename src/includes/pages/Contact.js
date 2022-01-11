import React from "react";

const Contact = () => {
  return (
    <>
      <div class="banner" id="home"></div>
      <section className="contact py-5">
        <div className="container py-lg-5">
          <h1 className="heading text-capitalize text-center">Contact Us</h1>
          <h5 className="heading mb-5 text-center">Taxi Cab</h5>
          <div className="row agile-contact-form">
            <div className="col-md-6 contact-form-left map">
              <div className="w3layouts-contact-form-top">
                <div className="contact-form-top">
                  <h3>Locate Us</h3>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381268.89304075!2d-108.26956901768942!3d34.145820117962906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sin!4v1524478277945"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="col-md-6 mt-md-0 mt-4 contact-form-right">
              <div className="contact-form-top">
                <h3>Send us a message</h3>
              </div>
              <div className="agileinfo-contact-form-grid">
                <form action="#" method="post">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required=""
                  />
                  <input
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    required=""
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required=""
                  />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    required=""
                  ></textarea>
                  <button className="btn1">Submit</button>
                </form>
              </div>
            </div>
          </div>
          <div className="row top mt-5">
            <div className="col-lg-4 mb-lg-0 mb-4 address-grid">
              <div className="row address-info">
                <div className="col-lg-3 col-sm-2 mb-sm-0 mb-3 address-left">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="col-lg-9 col-sm-10 address-right text-left">
                  <h6>Address</h6>
                  <p>
                    {" "}
                    3481 Jack Street Beverly Jack Hills
                    <span> 90210 Block, USA </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 mb-lg-0 mb-4 address-grid">
              <div className="row address-info">
                <div className="col-lg-3 col-sm-2 mb-sm-0 mb-3 address-left">
                  <i className="fas fa-envelope-open"></i>
                </div>
                <div className="col-lg-9 col-sm-10 address-right text-left">
                  <h6>Email</h6>
                  <p>
                    Email :
                    <a href="mailto:example@email.com"> mail@example.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 address-grid">
              <div className="row address-info">
                <div className="col-lg-3 col-sm-2 mb-sm-0 mb-3 address-left">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="col-lg-9 col-sm-10 address-right text-left">
                  <h6>Phone</h6>
                  <p>Phone : 112 367 896 2449</p>
                  <p>Fax : 112 367 896 2449</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
