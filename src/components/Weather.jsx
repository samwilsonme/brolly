function Weather(props) {
  // props.time = time (used for ExpectedWeather)
  // props.condition = condition
  // props.temperature = temperature
  return (
    <div className="weather">
      {props.time && <h3>{props.time}</h3>}
      <img src={props.condition} alt={props.condition} />
      <p>{props.temperature}</p>
    </div>
  );
}

export default Weather;
// This component is responsible for displaying the weather information
// It takes uses data from a API and displays the weather condition and temperature