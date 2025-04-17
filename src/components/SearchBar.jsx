import "./SearchBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../assets/icons/search.svg";
import data from '../data/uk_locations.min.json'; // Import the local JSON file

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [cityData, setCityData] = useState([]); // State to hold the full city data from JSON

  useEffect(() => {
    setCityData(data); // Load the entire JSON data into state
  }, []);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/weather?location=${encodeURIComponent(searchTerm.trim())}`);
    };
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0 && cityData.length > 0) {
      const filtered = cityData
        .filter((city) => {
          const searchableName = (city.name_2 && city.name_2.trim() !== "") ? city.name_2 : city.name_1;
          return searchableName.toLowerCase().startsWith(value.toLowerCase());
        })
        .slice(0, 5); // Limit to 5 suggestions

      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }

  const handleSuggestionClick = (suggestion) => {
    const selectedCityName = (suggestion.name_2 && suggestion.name_2.trim() !== "") ? suggestion.name_2 : suggestion.name_1;
    setSearchTerm(selectedCityName);
    setSuggestions([]);
    navigate(`/weather?location=${encodeURIComponent(selectedCityName)}`);
  }

  const extractPostcodeArea = (postcode) => {
    if (!postcode) {
      return "";
    }
    // Match the first part of the postcode (letters only)
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
          {suggestions.map((suggestion, index) => {
            const displayName = (suggestion.name_2 && suggestion.name_2.trim() !== "") ? suggestion.name_2 : suggestion.name_1;
            const postcodeArea = extractPostcodeArea(suggestion.postcode_district);
            return (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {displayName} ({postcodeArea})
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;