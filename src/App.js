import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React , { useState, useEffect } from 'react';
import './App.css';
import Home from './Home';
import Results from './Results';

function App() {
  const [age, setAge] = useState(50);
  const [cuisine, setCuisine] = useState('Indian');
  const [gender, setGender] = useState('M');
  const [temperature, setTemperature] = useState(50);
  const [time, setTime] = useState('24');
  const [weather, setWeather] = useState('Sunny');

  return (
    <Router>
        <Routes>
          <Route path='/results' element={<Results vals={{age, cuisine, gender, temperature, time, weather}}/>} />
          <Route path='/' element={<Home vals={{age, cuisine, gender, temperature, time, weather}} set={{setAge, setCuisine, setGender, setTemperature, setTime, setWeather}}/>} />
        </Routes>
    </Router>
  );
}

export default App;
