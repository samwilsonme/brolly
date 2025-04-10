import cloudRain from "../assets/icons/cloud-rain.png";
import cloudThunder from "../assets/icons/cloud-thunder.png";
import cloudThunderDay from "../assets/icons/cloud-thunder-day.png";
import doubleCloud from "../assets/icons/doublecloud.png";
import partlyCloudy from "../assets/icons/partly cloudy-day.png";
import rainbow from "../assets/icons/rainbow.png";
import rainy from "../assets/icons/rainy.png";
import sleety from "../assets/icons/sleety.png";
import sleetyDay from "../assets/icons/sleety-day.png";
import snow from "../assets/icons/snow.png";
import snowy from "../assets/icons/snowy.png";
import stormy from "../assets/icons/stormy.png";
import stormyDay from "../assets/icons/stormy-day.png";
import sunny from "../assets/icons/sunny.png";
import umbrella from "../assets/icons/umbrella.png";
import windy from "../assets/icons/windy.png";

function getWeatherIcon(condition) {
  const normalized = condition.toLowerCase();

  if (normalized.includes("thunder")) return cloudThunder;
  if (normalized.includes("storm")) return stormyDay;
  if (normalized.includes("rain")) return rainy;
  if (normalized.includes("snow")) return snowy;
  if (normalized.includes("clear")) return sunny;
  if (normalized.includes("cloud")) return partlyCloudy;
  if (normalized.includes("wind")) return windy;
  if (normalized.includes("sleet")) return sleetyDay;
  if (normalized.includes("drizzle")) return cloudRain;
  if (normalized.includes("overcast")) return doubleCloud;
  if (normalized.includes("mist") || normalized.includes("fog")) return umbrella;

  return umbrella; // fallback icon
}

export default getWeatherIcon;
