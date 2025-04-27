import LocationSearch from "../components/LocationSearch";
import LocationGeo from "../components/LocationGeo";

import './Location.css';

export function Location() {
  return (
    <main className="location-page">
      <h1>Select Location</h1>
      <LocationSearch />
      <div className="fixed-bottom">
        <LocationGeo />
      </div>
    </main>
  );
}