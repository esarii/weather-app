import React, { createContext, useContext, useEffect, useState } from 'react'
import CityContext from './CityContext';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

  const { selectedCity } = useContext(CityContext);
  const [weatherData, setWeatherData] = useState({ weather: [] });

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${selectedCity.name}&appid=${apiKey}`

  useEffect(() => {
    axios(apiUrl)
      .then((res) => {
        setWeatherData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [apiUrl, selectedCity]);


  const values = {
    weatherData,
  };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
}


export default WeatherContext;