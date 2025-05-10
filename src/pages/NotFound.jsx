import { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";

import { LocationSearchLink } from '../components/LocationSearch';
import LocationGeo from '../components/LocationGeo';

import SVGlogo from '../assets/logo/brolly.svg?react';
import dogs from '../assets/images/brolly-dogs.png';

import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();
  const rainFrontRef = useRef(null);
  const rainBackRef = useRef(null);

  // https://codepen.io/arickle/pen/XKjMZY
  useEffect(() => {
    const makeItRain = () => {
      //clear out everything
      if (rainFrontRef.current) {
        rainFrontRef.current.innerHTML = '';
      }
      if (rainBackRef.current) {
        rainBackRef.current.innerHTML = '';
      }

      let increment = 0;
      let drops = "";
      let backDrops = "";

      while (increment < 100) {
        const randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        const randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;
        drops += `<div class="drop" style="left: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
        backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${(randoFiver + randoFiver - 1 + 100)}%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
      }

      if (rainFrontRef.current) {
        rainFrontRef.current.innerHTML = drops;
      }
      if (rainBackRef.current) {
        rainBackRef.current.innerHTML = backDrops;
      }
    };

    makeItRain();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  return (
    <div className="notfound-page">
      <header>
        <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
        <SVGlogo role="img" alt="Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance" />
        <div className="location-links">
          <LocationSearchLink type="icon" />
          <LocationGeo type="icon" />
        </div>
      </header>

      <main>
        <h2>404 Not Found</h2>
        <p>Expect heavy rain, strong winds, and absolutely no page content.</p>
        <p>Stick around and enjoy the drizzle, or pop your umbrella and head <a onClick={() => navigate("/")}>Home</a>.</p>

        <img src={dogs} alt="Lola and Lily - The Brolly Mascots - Dogs" />
        <h2>When it rains, it paws.</h2>
        <p>Lola and Lily are keeping dry - you should too!</p>
      </main>

      <div className="rain front-row" ref={rainFrontRef}></div>
      <div className="rain back-row" ref={rainBackRef}></div>
    </div>
  );
}