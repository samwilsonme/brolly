import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
import searchicon from "../assets/icons/searchicon.svg";

function SearchBar() {
  const navigate = useNavigate();
  const handleSearch = () => {
    //for now, no matter what you type, the search bar will take you to the weather display page just for test purposes. We will update this function later once you have your open weather api
    navigate("/weather");
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
