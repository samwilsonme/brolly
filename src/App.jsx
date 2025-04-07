import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingSearch } from './pages/LandingSearch';
import { WeatherDisplay } from './pages/WeatherDisplay';

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingSearch />} />
      <Route path="/weather" element={<WeatherDisplay />} />
    </Routes>
  )
}

export default App
