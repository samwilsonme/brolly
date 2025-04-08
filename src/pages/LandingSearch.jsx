import SearchBar from "../components/SearchBar";
import "./LandingSearch.css";

export function LandingSearch() {
  return (
    <>
      <div className="header-container">
        <header className="app-header">
          <h1>brolly</h1>
          <p>Do you need an umbrella today?</p>
        </header>
      </div>
      <SearchBar />
    </>
  );
}
