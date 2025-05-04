import { useEffect } from 'react';
import { toast } from 'sonner';

import LocationGeo from '../components/LocationGeo';
import { LocationSearchLink } from '../components/LocationSearch';
import { ThemeToggle } from '../components/ThemeToggle';

import SVGlogo from '../assets/logo/brolly-question.svg?react';

import './Landing.css';

export function Landing({ errorMessage }) {

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
    }
  }, [errorMessage]);

  return (
    <main className="landing-page">
      <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
      <p>Do you need an umbrella today?</p>
      <SVGlogo role="img" alt="Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance" />
      

      <LocationGeo />
      <LocationSearchLink type="text" />
      <footer>
        <ThemeToggle />
      </footer>
    </main>
  );
}
