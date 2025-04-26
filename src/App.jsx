import {  Routes, Route } from 'react-router-dom';
import './App.css';
import { LandingSearch } from './pages/LandingSearch';
import { WeatherDisplay } from './pages/WeatherDisplayGeo';
import { NotFound } from './pages/NotFound';
import { SearchDisplay } from './pages/SearchDisplay';

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingSearch />} />
        <Route path="/search" element={<SearchDisplay />} />
        <Route path="/weather" element={<WeatherDisplay />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
