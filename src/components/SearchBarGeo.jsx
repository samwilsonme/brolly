import "./SearchBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icons/search.svg";
import data from '../data/uk_locations.min.json'; // Import the local JSON file

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [locationData, setLocationData] = useState([]); // State to hold the full location data from JSON

  useEffect(() => {
    setLocationData(data); // Load the entire JSON data into state
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      // Find the selected location data based on the searchTerm
      const selectedLocation = locationData.find((location) => {
        const searchableName = (location.name_2 && location.name_2.trim() !== "") ? location.name_2 : location.name_1;
        return searchableName.toLowerCase() === searchTerm.trim().toLowerCase();
      });

      if (selectedLocation && typeof selectedLocation.latitude === 'number' && typeof selectedLocation.longitude === 'number') {
        // json file sets latitude and longitude incorrectly
        //navigate(`/weather?lat=${selectedLocation.longitude}&lon=${selectedLocation.latitude}`);
        navigate('/weather', {
          state: {
            lat: selectedLocation.longitude,
            lon: selectedLocation.latitude,
            name: (selectedLocation.name_2 && selectedLocation.name_2.trim() !== "") ? selectedLocation.name_2 : selectedLocation.name_1,
          },
        }); // Include name in the state for search and geo to match up, for example cambourne uses caxton weather data
      } else {
        console.warn(`Coordinates not found for "${searchTerm}". Cannot navigate with lat/lon.`);
        // Optionally handle the case where coordinates are not found (e.g., display a message)
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0 && locationData.length > 0) {
      const filtered = locationData
        .filter((location) => {
          const searchableName = (location.name_2 && location.name_2.trim() !== "") ? location.name_2 : location.name_1;
          return searchableName.toLowerCase().startsWith(value.toLowerCase());
        })
        .slice(0, 5); // Limit to 5 suggestions

      setSuggestions(filtered.map(location => ({
        ...location,
        displayName: (location.name_2 && location.name_2.trim() !== "") ? location.name_2 : location.name_1,
      })));
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.displayName);
    setSuggestions([]);
    // json file sets latitude and longitude incorrectly
    //navigate(`/weather?lat=${suggestion.longitude}&lon=${suggestion.latitude}`);
    navigate('/weather', {
      state: {
        lat: suggestion.longitude,
        lon: suggestion.latitude,
        name: suggestion.displayName, // Include name in the state for search and geo to match up, for example cambourne uses caxton weather data
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
          placeholder="Search Location"
          value={searchTerm}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="search-suggestion">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.displayName} ({extractPostcodeArea(suggestion.postcode_district)})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;