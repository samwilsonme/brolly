import './ExpectedWeather.css'
import Weather from "./Weather"

function ExpectedWeather() {
    return (
        <div className="expected-weather">
            <h2>Expected</h2>
            <Weather time="19:00" />
            <Weather time="20:00" />
            <Weather time="21:00" />
            <Weather time="22:00" />
            <Weather time="23:00" />
        </div>
    )
}

export default ExpectedWeather
// This component is responsible for displaying the expected weather information