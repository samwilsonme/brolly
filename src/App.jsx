import {  Routes, Route } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import { Landing } from './pages/Landing';
import { Weather } from './pages/Weather';
import { Location } from './pages/Location';
import './App.css';

function App() {

  // add error toast to *
  // or bring back NotFound

  return (
    <div className="app">
      <ErrorBoundary>
        <Routes>
          <Route path="*" element={<Landing />} />
          <Route path="/" element={<Landing />} />
          <Route path="/location" element={<Location />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
