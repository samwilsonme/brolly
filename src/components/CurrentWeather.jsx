import './CurrentWeather.css'
import Weather from "./Weather"

function CurrentWeather() {
    return (
        <div className="current-weather">
            <h2>Currently</h2>
            <Weather />
        </div>
    )
}

export default CurrentWeather
// This component is responsible for displaying the current weather information