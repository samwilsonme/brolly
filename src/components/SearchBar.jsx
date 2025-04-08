import "./SearchBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchicon from "../assets/icons/searchicon.svg";

//static list of cities for suggestions (we can update this to the open weather geocode later)
const cities = ["London", "Leeds", "Liverpool", "Manchester", "Birmingham", "Bristol"];

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

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

    if (value.length > 0) {
      const filtered = cities.filter((city) => 
        city.toLowerCase().startsWith(value.toLowerCase())).slice(0, 3); //limit suggestions to 3
        setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
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
            <img src={searchicon} />
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
      </div>
    </div>
  );
}

export default SearchBar;
// This is a mock up of the location search bar
