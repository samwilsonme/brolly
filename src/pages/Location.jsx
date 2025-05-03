import LocationSearch from '../components/LocationSearch';
import LocationGeo from '../components/LocationGeo';

import './Location.css';

export function Location() {
  return (
    <main className="location-page">
      <LocationSearch />
      <div className="fixed-bottom">
        <p>Please note that search functionality is presently restricted to the United Kingdom. If you are located elsewhere, why not try to ...</p>
        <LocationGeo />
      </div>
    </main>
  );
}