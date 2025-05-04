// server/index.js
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(cors());

app.get('/weather', async (req, res) => {
  const { lat, lon } = req.query;

  if (!lat || !lon) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  try {
    const [current, forecast] = await Promise.all([
      axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: { lat, lon, units: 'metric', appid: API_KEY }
      }),
      axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: { lat, lon, units: 'metric', cnt: 5, appid: API_KEY }
      }),
    ]);

    res.json({ current: current.data, forecast: forecast.data });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});