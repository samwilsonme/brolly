import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import search from "../assets/icons/search.svg";
import { useLocationSearch } from "../hooks/useLocationSearch";

import "./LocationSearch.css";

export function LocationSearchLink({ type = "text" }) {
  const navigate = useNavigate();

  if (type === "text") {
    return (
      <a className={`search-link-${type}`} onClick={() => navigate("/location")}>
        Search Location Manually
      </a>
    );
  } else {
    return (
      <a className={`search-link-${type}`} onClick={() => navigate("/location")}>
        <img src={search} alt="Search" />
      </a>
    );
  }
}

export function LocationSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const { locationData, loading } = useLocationSearch((error) =>
    toast.error("Something went wrong loading location data.")
  );

  const handleSearch = () => {
    try {
      if (searchTerm.trim()) {
        const selectedLocation = locationData.find((location) =>
          location.name.toLowerCase() === searchTerm.trim().toLowerCase()
        );

        if (
          selectedLocation &&
          typeof selectedLocation.latitude === "number" &&
          typeof selectedLocation.longitude === "number"
        ) {
          navigate("/weather", {
            state: {
              lat: selectedLocation.latitude,
              lon: selectedLocation.longitude,
              name: selectedLocation.name,
            },
          });
        } else {
          toast.error(`Could not find "${searchTerm}".`);
        }
      }
    } catch (error) {
      toast.error("Something went wrong with the search.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && searchTerm.trim()) {
      handleSearch();
    }
  };

  const handleChange = (e) => {
    try {
      const value = e.target.value;
      setSearchTerm(value);

      if (value.length > 0 && locationData.length > 0) {
        const filtered = locationData
          .filter((location) =>
            location.name.toLowerCase().startsWith(value.toLowerCase())
          )
          .slice(0, 5);

        setSuggestions(
          filtered.map((location) => ({
            ...location,
            displayName: location.name,
          }))
        );
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      toast.error("Failed to update suggestions.");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    try {
      setSearchTerm(suggestion.displayName);
      setSuggestions([]);

      navigate("/weather", {
        state: {
          lat: suggestion.latitude,
          lon: suggestion.longitude,
          name: suggestion.displayName,
        },
      });
    } catch (error) {
      toast.error("Failed to navigate to the selected location.");
    }
  };

  const extractPostcodeArea = (postcode) => {
    if (!postcode) return "";
    const match = postcode.match(/^([A-Z]+)/);
    return match ? match[1] : "";
  };

  return (
    <div className="search">
      <div className="search-bar">
        <img src={search} alt="Search" onClick={handleSearch} />
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
        searchTerm &&
        !loading && (
          <div className="no-results">No results found for "{searchTerm}"</div>
        )
      )}
    </div>
  );
}

export default LocationSearch;