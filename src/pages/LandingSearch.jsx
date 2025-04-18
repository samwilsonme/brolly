import SearchBar from "../components/SearchBar";
import "./LandingSearch.css";
import logo from '../assets/logo/brolly-question.svg'

export function LandingSearch() {
  return (
    <main className="search-page">
      <header>
        <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
        <p>Do you need an umbrella today?</p>
        <img src={logo} alt="brolly" />
      </header>
      <SearchBar />
    </main>
  );
}