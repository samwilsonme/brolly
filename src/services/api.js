// OpenWeatherMap API integration
// Fetch weather data from the OpenWeatherMap API based on user input
const apiKey = "" // Insert API Key
const apiURL = "https://api.openweathermap.org/data/2.5"
const apiQuery = `?q=Cambridge,UK&units=metric&appid=${apiKey}`

// Fetch the current weather data
const fetchCurrentWeather = async () => {
  const url = `${apiURL}/weather${apiQuery}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()
    //console.log(data)
    return data
  } catch (error) {
    //console.error(error.message)
  }
}

// Fetch the expected weather data
const fetchExpectedWeather = async () => {
  const url = `${apiURL}/forecast${apiQuery}`
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const data = await response.json()
    //console.log(data)
    return data
  } catch (error) {
    //console.error(error.message)
  }
}

export { fetchCurrentWeather, fetchExpectedWeather }
// This code fetches the current and expected weather data from the OpenWeatherMap API