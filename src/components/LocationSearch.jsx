import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import data from '../data/uk_locations.min.json'; // Import the local JSON file

import icon from "../assets/icons/search.svg";
import search from '../assets/icons/search.svg';

import './LocationSearch.css';

export function LocationSearchLink({type="text"}) {
  const navigate = useNavigate();
  if (type === "text") {
    return <a className={`search-link-${type}`} onClick={() => navigate("/location")}>Search Location Manually</a>
  }else{
    return (
      <a className={`search-link-${type}`} onClick={() => navigate("/location")}>
        <img src={search} alt="Search" />
      </a>
    )
  }
}

export function LocationSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [locationData, setLocationData] = useState([]); // State to hold the full location data from JSON
  const [loading, setLoading] = useState(false); // Loading state for searching
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    setLocationData(data); // Load the entire JSON data into state
    setLoading(false);
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      const selectedLocation = locationData.find((location) =>
        location.name.toLowerCase() === searchTerm.trim().toLowerCase()
      );

      if (selectedLocation && typeof selectedLocation.latitude === 'number' && typeof selectedLocation.longitude === 'number') {
        navigate('/weather', {
          state: {
            lat: selectedLocation.latitude,
            lon: selectedLocation.longitude,
            name: selectedLocation.name,
          },
        });
      } else {
        console.warn(`Coordinates not found for "${searchTerm}". Cannot navigate with lat/lon.`);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0 && locationData.length > 0) {
      const filtered = locationData
        .filter((location) =>
          //location.name.toLowerCase().includes(value.toLowerCase()) // Match anywhere in the name
          location.name.toLowerCase().startsWith(value.toLowerCase())  
        )
        .slice(0, 5); // Limit to 5 suggestions

      setSuggestions(filtered.map(location => ({
        ...location,
        displayName: location.name,
      })));
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.displayName);
    setSuggestions([]);
    navigate('/weather', {
      state: {
        lat: suggestion.latitude,
        lon: suggestion.longitude,
        name: suggestion.displayName, 
      },
    });
  }

  const extractPostcodeArea = (postcode) => {
    if (!postcode) {
      return "";
    }
    const match = postcode.match(/^([A-Z]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="search">
      <div className="search-bar">
        <img src={icon} alt="Search" onClick={handleSearch} />
        <input
          type="text"
          name="search"
          placeholder="Search Location"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {loading && <div>Loading suggestions...</div>}
      
      {suggestions.length > 0 ? (
        <ul className="search-suggestion">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              <span>{extractPostcodeArea(suggestion.postcode)}</span>
              <p>{suggestion.displayName}</p>
            </li>
          ))}
        </ul>
      ) : (
        searchTerm && !loading && (
          <div className="no-results">No results found for "{searchTerm}"</div>
        )
      )}
    </div>
  );
}

export default LocationSearch;