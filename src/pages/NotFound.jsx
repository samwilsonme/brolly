import { useNavigate } from "react-router-dom";

import { LocationSearchLink } from '../components/LocationSearch';
import LocationGeo from '../components/LocationGeo';
import { ThemeToggle } from '../components/ThemeToggle';

import SVGlogo from '../assets/logo/brolly.svg?react';
import dogs from '../assets/images/brolly-dogs.png';

import './NotFound.css';

export function NotFound() {
  const navigate = useNavigate();

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

      <footer>
        <ThemeToggle />
      </footer>
    </div>
  );
}

