import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import SVGgeo from "../assets/icons/location-geo.svg?react";
import { useLocationGeo } from "../hooks/useLocationGeo";

import './LocationGeo.css';

function LocationGeo({ type = "text" }) {
  const navigate = useNavigate();
  const { latitude, longitude, error, loading, getLocation } = useLocationGeo();
  
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

  if (type === "text") {
    return <a className={`geo-link-${type}`} onClick={handleLocationGeoClick}>Use Current Location</a>
  } else {
    return (
      <a className={`geo-link-${type}`} onClick={handleLocationGeoClick}>
        <SVGgeo alt="Use Current Location " />
      </a>
    );
  }

}

export default LocationGeo;