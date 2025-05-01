import getWeatherIcon from "../utils/getWeatherIcon";

function WeatherItem({ time, condition, temperature, icon, unit }) {
  const iconsrc = getWeatherIcon(icon);

  let displayTemperature = temperature;
  let displayUnit = "°C";

  if (unit === "imperial") {
    displayTemperature = ((temperature * 9) / 5) + 32;
    displayUnit = "°F";
  }

  return (
    <div className="details">
      {time && <h4>{time}</h4>}
      <img src={iconsrc} alt={condition} />
      <p>{Math.round(displayTemperature)}{displayUnit}</p>
    </div>
  );
}

export default WeatherItem;