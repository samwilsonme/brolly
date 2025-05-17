import { useState, useEffect } from 'react';
import data from '../data/locations.min.json';

export function useLocationSearch(onError) {
  const [locationData, setLocationData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setLocationData(data); // Load local data
    } catch (error) {
      if (onError && typeof onError === 'function') {
        onError(error);
      }
    } finally {
      setLoading(false);
    }
  }, [onError]);

  return { locationData, loading };
}