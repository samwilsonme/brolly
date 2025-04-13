import "./SearchBar.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import icon from "../assets/icons/search.svg";

//static list of cities for suggestions (we can update this to the open weather geocode later)
//const cities = ["London", "Leeds", "Liverpool", "Manchester", "Birmingham", "Bristol"];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const { location, loading, error } = useLocation(searchTerm);

  useEffect(() => {
    if (location && location.length > 0 && searchTerm.trim().length >= 3) {
      const filtered = location
        //.map((loc) => `${loc.name}${loc.country ? `, ${loc.country}` : ''}`) // Include country if available
        //.map((loc) => `${loc.name}${loc.state ? `, ${loc.state}` : ''}`) // Include state if available
        .map((loc) => loc.name) // Only include the city name
        .filter((suggestion) =>
          suggestion.toLowerCase().startsWith(searchTerm.toLowerCase())
        )
        .slice(0, 3);
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  }, [location, searchTerm]);


  const handleSearch = () => {
    //this function has now been changed to actually handle location search!
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
    // The suggestion filtering is now done in the useEffect hook
    /*if (value.length > 0) {
      const filtered = cities.filter((city) => 
        city.toLowerCase().startsWith(value.toLowerCase())).slice(0, 3); //limit suggestions to 3
        setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }*/
  }

  const handleSuggestionClick = (city) => {
    setSearchTerm(city);
    setSuggestions([]);
    navigate(`/weather?location=${encodeURIComponent(city)}`);
  }

  return (
    <div className="search-bar-container">
      <div className="search-area">
        <div className="search-bar">
          <div className="magnifying-glass" onClick={handleSearch}>
            <img src={icon} />
          </div>
          <input
            type="text"
            placeholder="Search Location"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((city, index) => (
              <li key={index} onClick={() => handleSuggestionClick(city)}>
                {city}
              </li>
            ))}
          </ul>
        )}
        {loading && <p className="loading">...</p>}
        {error && <p className="error">.....</p>}
      </div>
    </div>
  );
}

export default SearchBar;
// This is a mock up of the location search bar
