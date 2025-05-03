import {  Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { Landing } from './pages/Landing';
import { Weather } from './pages/Weather';
import { Location } from './pages/Location';
import { ThemeProvider } from "./context/ThemeContext";
import { Toaster } from 'sonner';

import './App.css';

function App() {

  return (
    <ThemeProvider>
      <div className="app" data-theme="dark">
        <Toaster toastOptions={{ className: 'my-custom-toast' }} />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/location" element={<Location />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="*" element={<Landing errorMessage="Page not found. Redirected to Home." />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  )
}

export default App
