import ErrorBoundary from "../components/ErrorBoundary";
import logo from '../assets/logo/brolly-question.svg'

export function NotFound() {

  return (
    <ErrorBoundary>
      <main className="search-page">
        <header>
          <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
          <p>Do you need an umbrella today?</p>
          <img src={logo} alt="brolly" />
        </header>
        <div className="not-found">
          <p>Page Not Found!</p>
          <a href="/">Return Home</a>
        </div>
      </main>
    </ErrorBoundary>
  );
}