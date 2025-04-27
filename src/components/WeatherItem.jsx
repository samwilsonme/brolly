import getWeatherIcon from "../utils/getWeatherIcon";

function WeatherItem({time, condition, temperature, icon}) {
  const iconsrc = getWeatherIcon(icon);

  return (
    <div className="details">
      {time && <h4>{time}</h4>}
      <img src={iconsrc} alt={condition} />
      <p>{Math.round(temperature)}°C</p>
    </div>
  );
}

export default WeatherItem;