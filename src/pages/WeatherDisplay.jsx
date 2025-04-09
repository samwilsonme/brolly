import { useSearchParams } from "react-router-dom";
import { useWeather } from "../hooks/useWeather";
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
    <>
      <CurrentWeather data={current}/>
      <ExpectedWeather data={forecast}/>
    </>
  );
}