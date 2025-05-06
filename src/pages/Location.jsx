import LocationSearch from '../components/LocationSearch';
import LocationGeo from '../components/LocationGeo';

import './Location.css';

export function Location() {
  return (
    <div className="location-page">
      <main>
        <LocationSearch />
      </main>
      <footer className="fixed-bottom">
        <p>Please note that search functionality is presently restricted to the United Kingdom. If you are located elsewhere, why not try to ...</p>
        <LocationGeo />
      </footer>
    </div>
  );
}