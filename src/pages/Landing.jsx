import LocationGeo from "../components/LocationGeo";
import { LocationSearchLink } from "../components/LocationSearch";

import logo from "../assets/logo/brolly-question.svg";

import "./Landing.css";

export function Landing() {
  return (
    <main className="landing-page">
      <h1>Brolly: Get Your Local UK Weather Forecast and Umbrella Guidance</h1>
      <p>Do you need an umbrella today?</p>
      <img src={logo} alt="Brolly question logo" />

      <LocationGeo />
      <LocationSearchLink type="text" />
    </main>
  );
}
