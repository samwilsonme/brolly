import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import searchicon from "../assets/icons/searchicon.svg";

function SearchBar() {
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
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
// This is a mock up of the location search bar
