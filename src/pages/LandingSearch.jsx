import { useState} from "react";
import { useSearchParams } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import SearchBar from "../components/SearchBar";
import logo from '../assets/logo/brolly-question.svg'
import search from '../assets/icons/search.svg'
import Modal from "../components/Modal";

export function LandingSearch() {
  const [modal, setModal] = useState(false)
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
        <a className="search-placeholder" onClick={() => setModal(true)}>
          <img src={search} alt="Search" />
          <p>Search Location</p>
        </a>
        {errorMessage && <div className="error-message"><p>{errorMessage} Please try again.</p></div>}
        {modal && <Modal modal={setModal} style="modal-page search-page"><SearchBar modal={setModal}/></Modal>}
      </main>
    </ErrorBoundary>
  );
}