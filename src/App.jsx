import React from "react";
import HeroBanner from "./components/HeroBanner";
import Countdown from "./components/CountDown";
import Story from "./components/Story";
import TravelStay from "./components/TravelStay";
import Blessings from "./components/Blessings";
import Registry from "./components/Registry";
import Venue from "./components/Venue";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Petals from "./components/Overlay";
import "./css/style.css";
import Overlay from "./components/Overlay";

function App() {
    return (
        <div>
            
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
