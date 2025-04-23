import { useNavigate } from "react-router-dom";
import useGeoLocation from "../hooks/useGeoLocation";

function GeoLocation() {
  const navigate = useNavigate();
  const { latitude, longitude, error } = useGeoLocation();

  const handleGeoLocationClick = () => {
    if (latitude && longitude) {
      console.log("Location:", { latitude, longitude });
      navigate("/weather");
    } else if (error) {
      console.error("Location error:", error);
    } else {
      console.log("Getting location...");
    }
  };

  return (
    <div>
      <p onClick={handleGeoLocationClick}>Use Current Location</p>
      {error && <p>{error}</p>}
    </div>
  );
}

export default GeoLocation;