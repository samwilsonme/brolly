import React, { useEffect, useState } from 'react';
import getWeatherIcon from '../utils/getWeatherIcon';
import { useThemeContext } from '../context/ThemeContext';

function WeatherItem({ time, condition, temperature, icon, unit }) {
  const { theme } = useThemeContext();  // Use context for theme
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    if (icon) {
      const iconPath = getWeatherIcon(icon, theme);
      setIconSrc(iconPath);
    }
  }, [icon, theme]);

  let displayTemperature = temperature;
  let displayUnit = "°C";

  if (unit === "imperial") {
    displayTemperature = ((temperature * 9) / 5) + 32;
    displayUnit = "°F";
  }

  if (!iconSrc) return <div>Loading...</div>;

  return (
    <div className="details">
      {time && <h4>{time}</h4>}
      <img src={iconSrc} alt={condition} />
      <p>{Math.round(displayTemperature)}{displayUnit}</p>
    </div>
  );
}

export default WeatherItem;