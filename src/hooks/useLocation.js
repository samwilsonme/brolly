import { useState, useCallback } from "react";

function useLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Get user's current location
  const getLocation = useCallback(() => {
    setLoading(true);
    setError(null); // Reset any previous errors

    const handleSuccess = (position) => {
      if (position?.coords) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      } else {
        setError("Unable to retrieve location data.");
      }
      setLoading(false);
    };

    const handleError = (err) => {
      setError(err.message);
      setLoading(false);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  return { latitude, longitude, error, loading, getLocation };
}

export default useLocation;
