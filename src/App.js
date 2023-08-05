import React, { useEffect } from "react";
import {
  Collapse,
  Carousel,
  initTE,
} from "tw-elements";
import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Navbar from "./components/Navbar";
import EventsSection from "./components/EventsSection";


const App = () => {

  useEffect(() => {
    initTE({ Collapse, Carousel });
  }, []);

  return (
    <>

    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/events" exact element={<EventsSection/>}/>
      </Routes>
      <Contact/>
      <CTA/>
    </Router>

    </>
  );
};

export default App;