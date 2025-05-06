import {  Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import { Landing } from './pages/Landing';
import { Weather } from './pages/Weather';
import { Location } from './pages/Location';
import { NotFound } from './pages/NotFound';
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

            <Route path="*" element={<NotFound />} />
            {/* The route below correctly displayed a 404 with an error message in a Sonner toast locally, but is not functioning as expected on Vercel. */}
            {/*<Route path="*" element={<Landing errorMessage="Page not found. Redirected to Home." />} /> */}
          </Routes>
        </ErrorBoundary>
      </div>
    </ThemeProvider>
  )
}

export default App
