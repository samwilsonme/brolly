import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';

dotenv.config();

const app = express();
const API_KEY = process.env.OPENWEATHER_API_KEY;

// CORS
const allowedOrigins = [process.env.CLIENT_URL || 'http://localhost:5173'];
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res, next) => {
    const error = new Error('Too many requests from this IP, please try again later.');
    error.status = 429;
    next(error);
  }
});
app.use(limiter);

// Weather API route
app.get('/api/weather', async (req, res, next) => {
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
    next(err);
  }
});

// Error Handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';
  console.error(`[Error] ${status}: ${message}`);
  res.status(status).json({ error: message });
});

// 🔁 Export app for both local dev and Vercel
export default app;

// ✅ Add local server only when running directly (not in Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local API server running at http://localhost:${PORT}`);
  });
}