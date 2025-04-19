import { useSearchParams } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBar from "../components/SearchBar";
import logo from '../assets/logo/brolly-question.svg'

export function LandingSearch() {
  const [params] = useSearchParams();
  const error = params.get("error");

  let errorMessage = ""; // Declare message in the outer scope

  if (error) {
    if (error === "city") {
      const location = params.get("location");
      errorMessage = `Sorry, we couldn't find "${location}".`;
    } else {
      errorMessage = "Sorry, there was an error.";
    }
  }
  
  return (
    <ErrorBoundary>
      <main className="search-page">
        <header>
          <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
          <p>Do you need an umbrella today?</p>
          <img src={logo} alt="brolly" />
        </header>
        {errorMessage && <div className="error-message"><p>{errorMessage} Please try again.</p></div>}
        <SearchBar />
      </main>
    </ErrorBoundary>
  );
}