import { useEffect } from 'react';
import { toast } from 'sonner';

import LocationGeo from '../components/LocationGeo';
import { LocationSearchLink } from '../components/LocationSearch';
import { ThemeToggle } from '../components/ThemeToggle';
import { ThemeDrawer } from '../components/ThemeDrawer';

import SVGlogo from '../assets/logo/brolly-question.svg?react';

import './Landing.css';

export function Landing({ errorMessage }) {

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <div className="landing-page">
      <header>
        <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
        <p>Do you need an umbrella today?</p>
        <SVGlogo role="img" alt="Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance" />
      </header>
      <main>
        <LocationGeo />
        <LocationSearchLink type="text" />
      </main>
      <footer>
        <div className="theme-settings">
          <ThemeDrawer />
          <ThemeToggle />
          {/*<ThemeDrawer />*/}
        </div>
      </footer>
    </div>
  );
}
