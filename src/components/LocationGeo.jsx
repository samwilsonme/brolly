import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

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
      //console.log("Location:", { latitude, longitude });
      navigate("/weather", { state: { lat: latitude, lon: longitude } });
    } else if (error) {
      //console.error("Location error:", error);
      toast.error(`Location error: ${error}`);
    } else if (loading) {
      //console.log("Getting your location...");
      //toast.info("Getting your location...");
    }
  }, [latitude, longitude, error, loading, navigate]);

  return <a className="location-geo" onClick={handleLocationGeoClick}>Use Current Location</a>
}

export default LocationGeo;