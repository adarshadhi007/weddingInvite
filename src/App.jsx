import React, { useState } from "react";

import HeroBanner from "./components/HeroBanner";
import Countdown from "./components/CountDown";
import Story from "./components/Story";
import TravelStay from "./components/TravelStay";
import Blessings from "./components/Blessings";
import Registry from "./components/Registry";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import ThankYou from "./components/ThankYou";
import "./css/style.css";

function App() {
    return (
        <div
  style={{
    background: `url(${process.env.PUBLIC_URL}/images/IMG_0422.JPG.jpeg) no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "100vh"
  }}
>
            
            <HeroBanner />
            <Countdown targetDate={new Date("2026-09-12T11:15:00").getTime()} />
            <Story />
            <TravelStay />
            <Blessings />
            <Registry />
            <Venue />
            <Gallery />
            <Footer />
        </div>
    );
}

export default App;
