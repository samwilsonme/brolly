function Weather(props) {

    // These variables should be replaced using data from an API
    const condition = 'Rain'
    const conditionImg = 'https://weather.metoffice.gov.uk/forecast/static/images/forecasts/weather/15.svg' // Temporary image URL
    const temperature = '10°C'

    return (
        <div className="weather">
            {props.time && <h3>{props.time}</h3>}
            <img src={conditionImg} alt={condition} />
            <p>{temperature}</p>
        </div>
    )

}

export default Weather
// This component is responsible for displaying the weather information
// It takes uses data from a API and displays the weather condition and temperature