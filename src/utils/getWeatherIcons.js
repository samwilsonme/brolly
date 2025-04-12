import cloudRain from "../assets/icons/cloud-rain.png";
import cloudRainDay from "../assets/icons/cloud-rain.png";
import cloudThunder from "../assets/icons/cloud-thunder.png";
import cloudThunderDay from "../assets/icons/cloud-thunder-day.png";
import doubleCloud from "../assets/icons/doublecloud.png";
import partlyCloudy from "../assets/icons/partly cloudy-night.png";
import partlyCloudyDay from "../assets/icons/partly cloudy-day.png";
import rainbow from "../assets/icons/rainbow.png";
import rainy from "../assets/icons/rainy-night.png";
import rainyDay from "../assets/icons/rainy.png";
import sleety from "../assets/icons/sleety.png";
import sleetyDay from "../assets/icons/sleety-day.png";
import snow from "../assets/icons/snow.png";
import snowy from "../assets/icons/snowy.png";
import stormy from "../assets/icons/stormy.png";
import stormyDay from "../assets/icons/stormy-day.png";
import clearDay from "../assets/icons/sunny.png";
import clear from "../assets/icons/moon.png";
import umbrella from "../assets/icons/umbrella.png";
import windy from "../assets/icons/night-breeze.png";
import windyDay from "../assets/icons/windy-day.png";

function getWeatherIcon(condition, pod) {
  const normalized = condition.toLowerCase();

  if (pod === "d") {
    if (normalized.includes("thunder")) return cloudThunderDay;
    if (normalized.includes("storm")) return stormyDay;
    if (normalized.includes("rain")) return rainyDay;
    if (normalized.includes("snow")) return snowy;
    if (normalized.includes("clear")) return clearDay;
    if (normalized.includes("cloud")) return partlyCloudyDay;
    if (normalized.includes("wind")) return windyDay;
    if (normalized.includes("sleet")) return sleetyDay;
    if (normalized.includes("drizzle")) return cloudRainDay;
    if (normalized.includes("overcast")) return doubleCloud;
    if (normalized.includes("mist") || normalized.includes("fog")) return umbrella;
  }else{
    if (normalized.includes("thunder")) return cloudThunder;
    if (normalized.includes("storm")) return stormy;
    if (normalized.includes("rain")) return rainy;
    if (normalized.includes("snow")) return snowy;
    if (normalized.includes("clear")) return clear;
    if (normalized.includes("cloud")) return partlyCloudy;
    if (normalized.includes("wind")) return windy;
    if (normalized.includes("sleet")) return sleety;
    if (normalized.includes("drizzle")) return cloudRain;
    if (normalized.includes("overcast")) return doubleCloud;
    if (normalized.includes("mist") || normalized.includes("fog")) return umbrella;
  }

  return umbrella; // fallback icon
}

export default getWeatherIcon;
