import { useState } from 'react'
import './App.css'
import CurrentWeather from './components/CurrentWeather'
import ExpectedWeather from './components/ExpectedWeather'

function App() {

  return (
    <>
      <CurrentWeather />
      <ExpectedWeather />
    </>
  )
}

export default App
