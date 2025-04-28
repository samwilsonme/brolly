import { useState, useCallback } from "react";

function useLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    setLoading(true);
    setError(null); // Reset any previous errors

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position?.coords) {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        } else {
          setError("Unable to retrieve location data.");
        }
        setLoading(false);
      },
      (err) => {
        setError(err.message || "An unknown error occurred while retrieving location.");
        setLoading(false);
      }
    );
  }, []);

  return { latitude, longitude, error, loading, getLocation };
}

export default useLocation;