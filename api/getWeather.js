export default async function handler(request, response) {
  // Get latitude and longitude from the query parameters
  const { lat, lon } = request.query;

  // Retrieve the API key from environment variables
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;
  const apiBase = "https://api.openweathermap.org/data/2.5";

  // Basic validation
  if (!lat || !lon) {
    return response.status(400).json({ error: "Latitude and longitude parameters are required." });
  }

  if (!apiKey) {
     console.error("API key not configured."); // Log server-side
     return response.status(500).json({ error: "Server configuration error." }); // Don't expose details
  }

  // Construct the API URLs for OpenWeatherMap
  const apiUrlCurrent = `${apiBase}/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const apiUrlForecast = `${apiBase}/forecast?lat=${lat}&lon=${lon}&units=metric&cnt=5&appid=${apiKey}`; // Fetching 5 forecast points like the original hook

  try {
    // Fetch current and forecast data in parallel
    const [currentRes, forecastRes] = await Promise.all([
      fetch(apiUrlCurrent),
      fetch(apiUrlForecast)
    ]);

    // Check if responses are OK
    if (!currentRes.ok) {
      const errorData = await currentRes.json();
      // Log the actual error server-side for debugging
      console.error("OpenWeatherMap Current API Error:", errorData);
      // Return a generic error to the client
      return response.status(currentRes.status).json({ error: `Failed to fetch current weather: ${errorData?.message || currentRes.statusText}` });
    }
     if (!forecastRes.ok) {
      const errorData = await forecastRes.json();
      console.error("OpenWeatherMap Forecast API Error:", errorData);
      return response.status(forecastRes.status).json({ error: `Failed to fetch forecast: ${errorData?.message || forecastRes.statusText}` });
    }

    // Parse the JSON data
    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    // Send the combined data back to the client
    response.status(200).json({
      current: currentData,
      forecast: forecastData,
    });

  } catch (error) {
    console.error("Serverless function error:", error);
    response.status(500).json({ error: "Internal server error fetching weather data." });
  }
}