import {  Routes, Route } from 'react-router-dom';
import ErrorBoundary from "./components/ErrorBoundary";
import { Landing } from './pages/Landing';
import { Weather } from './pages/Weather';
import { Location } from './pages/Location';
import { Toaster } from "sonner";
import './App.css';

function App() {

  return (
    <div className="app">
      <Toaster />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/location" element={<Location />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<Landing errorMessage="Page not found. Redirected to Home." />} />
        </Routes>
      </ErrorBoundary>
    </div>
  )
}

export default App
