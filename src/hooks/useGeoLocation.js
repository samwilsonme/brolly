import { useEffect, useState } from "react";

function useGeoLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const success = (location) => {
      setLatitude(location.coords.latitude);
      setLongitude(location.coords.longitude);
    };

    const error = (err) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []); 

  return { latitude, longitude, error };
}

export default useGeoLocation;