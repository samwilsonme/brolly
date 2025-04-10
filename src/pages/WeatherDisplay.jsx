import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
import BrollyWeather from "../components/BrollyWeather";
import CurrentWeather from "../components/CurrentWeather";
import ExpectedWeather from "../components/ExpectedWeather";

export function WeatherDisplay() {
  const [params] = useSearchParams();
  const location = params.get("location") || "Cambridge, UK";

  const { current, forecast, loading, error } = useWeather(location);

  if (loading) return <div>Loading weather data...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!current || !forecast ) return <div>No data available</div>;

  return (
    <div className='weather-container'>
      <div><BrollyWeather data={current}/></div>
      <div><CurrentWeather data={current}/></div>
      <div><ExpectedWeather data={forecast}/></div>
    </div>
  );
}