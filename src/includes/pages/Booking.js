import "rc-time-picker/assets/index.css";

import DatePicker from "react-datepicker";

import TimePicker from "rc-time-picker";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import React, { useState, useRef, useCallback } from "react";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2F1cmF2OTYiLCJhIjoiY2t5MGNxejYyMDJnZDJvbnhyNzR4azlzMiJ9.FL0UtxOWzQcmExv8Hc2I3A";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 22.4843,
    longitude: 88.2609,
    zoom: 8,
  });
  const geocoderContainerRef = useRef();
  const geocoderContainerRef1 = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );
  return (
    <>
      <div class="banner" id="wrapper"></div>
      <section className="bookingform py-5">
        <div className="container py-md-5 py-3">
          <h1 className="heading text-capitalize text-center">Booking form</h1>
          <h5 className="heading mb-5 text-center">Taxi Cab</h5>
          <div className="row">
            <div className="col-lg-6 book-appointment p-sm-5 py-5 px-4">
              <h2>Personal Details</h2>
              <div className="book-agileinfo-form">
                <div>
                  <div className="row main-agile-sectns">
                    <div className="col-md-6 agileits-btm-spc form-text1">
                      <input type="text" name="Name" placeholder="Full Name" />
                    </div>
                    <div className="col-md-6 agileits-btm-spc form-text2">
                      <input
                        type="text"
                        name="Phone no"
                        placeholder="Phone number"
                      />
                    </div>
                  </div>
                  <div className="row main-agile-sectns">
                    <div className="col-md-6 agileits-btm-spc form-text1">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-6">
                      <div className="agileits-btm-spc">
                        <select
                          id="cab"
                          onchange="change_country(this.value)"
                          className="frm-field required sect"
                        >
                          <option value="">Select Cab</option>
                          <option value="">Mini</option>
                          <option value="">Sedan</option>
                          <option value="">Elite</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="clear"></div>
                  <h2 className="sub-head-w3ls">Booking Details</h2>
                  <div className="row main-agile-sectns">
                    <div className="col-md-6 agileits-btm-spc form-text1 ">
                      <input
                        className="datepicker form-control bg-dark text-light"
                        placeholder="Pick-up Date"
                        type="date"
                        id="datePicker"
                        name="Date"
                        minDate={new Date()}
                        selected={selectedDate}
                        dateFormat="dd/MM/yyyy"
                        onChange={(Date) => {
                          setSelectedDate(Date);
                        }}
                      />
                    </div>
                    <div className="col-md-6 agileits-btm-spc form-text2">
                      <input
                        className="timepicker form-control bg-dark text-light"
                        placeholder="Pick-up Time"
                        type="time"
                        id="timePicker"
                        minuteStep={5}
                        name="Time"
                        selected={selectedTime}
                        onChange={(Time) => {
                          setSelectedTime(Time);
                        }}
                        use12Hours
                      />
                    </div>
                  </div>
                  <div className="row main-agile-sectns">
                    <div className="col-md-6 agileits-btm-spc form-text1">
                      <div
                        ref={geocoderContainerRef}
                        style={{
                          position: "relative",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                      />
                    </div>
                    <div className="col-md-6 agileits-btm-spc form-text1">
                      <div
                        ref={geocoderContainerRef1}
                        style={{
                          position: "relative",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                      />
                    </div>
                  </div>

                  <div className="main-agile-sectns">
                    <div className="agileits-btm-spc">
                      <select
                        id="passengers"
                        onchange="change_country(this.value)"
                        className="frm-field ct"
                      >
                        <option value="">No.of Passengers</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                      </select>
                    </div>
                    <div className="agileits-btm-spc form-text2">
                      <select
                        id="direction"
                        onchange="change_country(this.value)"
                        className="frm-field"
                      >
                        <option value="">Direction</option>
                        <option value="">One Way</option>
                        <option value="">Return</option>
                      </select>
                    </div>
                  </div>
                  <input type="submit" value="Book Now" />
                  <input type="reset" value="Reset" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-md-5">
              <img
                src="../public/images/car1.png"
                alt=""
                className="img-fluid"
              />
              <div style={{ height: "50vh", width: "50vh" }}>
                <MapGL
                  ref={mapRef}
                  {...viewport}
                  width="100%"
                  height="100%"
                  onViewportChange={handleViewportChange}
                  mapboxApiAccessToken={MAPBOX_TOKEN}
                >
                  {" "}
                  <Geocoder
                    mapRef={mapRef}
                    containerRef={geocoderContainerRef}
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="top-left"
                  />
                  <Geocoder
                    mapRef={mapRef}
                    containerRef={geocoderContainerRef1}
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    position="top-left"
                  />
                </MapGL>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;

/*




 <DatePicker
                        className="text-light"
                        placeholder="Date"
                        selected={selectedDate}
                        onChange={(Date) => {
                          setSelectedDate(Date);
                        }}
                        dateFormat="dd/MM/yyyy"
                        minDate={new Date()}
                      />







*/
