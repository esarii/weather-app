import React, { createContext, useContext, useEffect, useState } from 'react'
import CityContext from './CityContext';
import axios from 'axios';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const { location  } = useContext(CityContext);
    const [weatherData, setWeatherData] = useState([]);


    const getWeatherData = async (location) => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

        console.log("ezgiii", apiKey);
      
        try {
          const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
          );
          setWeatherData(data);
        } catch {
          alert("Hava durumu verileri alınamadı.");
        }
      };

      useEffect(() => {
        location && getWeatherData(location);
      }, [location]);


    const values = {
        weatherData,

    };

    return (
        <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
    );
}


export default WeatherContext;