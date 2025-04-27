import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import useLocation from "../hooks/useLocation";

import './LocationGeo.css';

function LocationGeo() {
  const navigate = useNavigate();
  const { latitude, longitude, error, loading, getLocation } = useLocation();

  const handleLocationGeoClick = () => {
    getLocation(); // Trigger the geolocation request on click
  };

  useEffect(() => {
    if (latitude && longitude) {
      console.log("Location:", { latitude, longitude });
      navigate("/weather", { state: { lat: latitude, lon: longitude } });
    } else if (error) {
      console.error("Location error:", error);
    } else if (loading) {
      console.log("Getting location...");
    }
  }, [latitude, longitude, error, loading, navigate]);

  return (
    <>
      <a className="location-geo" onClick={handleLocationGeoClick} disabled={loading}>
        {loading ? "Getting Location..." : "Use Current Location"}
      </a>
      {error && <p>{error}</p>}
    </>
  );
}

export default LocationGeo;