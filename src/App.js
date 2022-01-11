import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./includes/Navbar";
import About from "./includes/pages/About";
import Booking from "./includes/pages/Booking";
import Contact from "./includes/pages/Contact";
import Home from "./includes/pages/Home";
import Login from "./includes/pages/Login";
import Map from "./includes/pages/Map";
import Not_Found from "./includes/pages/Not_Found";
import Pricing from "./includes/pages/Pricing";
import Register from "./includes/pages/Register";
import Services from "./includes/pages/Services";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/booking" component={Booking} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/login" component={Login} />{" "}
          <Route exact path="/register" component={Register} />
          <Route exact path="/pricing" component={Pricing} />
          <Route component={Not_Found} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
