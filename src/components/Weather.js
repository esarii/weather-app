import { useContext } from 'react'
import CityContext from '../contexts/CityContext'
import WeatherContext from '../contexts/WeatherContext'
import ThemeContext from '../contexts/ThemeContext';

function Weather() {

    const { theme, setTheme } = useContext(ThemeContext);

    const { location, setLocation, data, selectedCity, setSelectedCity } = useContext(CityContext);

    const { weatherData } = useContext(WeatherContext);
    console.log(weatherData);

    const handleLocationChange = () => {
        console.log(location, "location");
        console.log(data, "data");  
        const cityInfo = data.find((city) => city.name.toLocaleLowerCase() === location.toLocaleLowerCase());
        setSelectedCity(cityInfo);
        console.log(selectedCity,"selectedCity");
    }

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const weatherIcon = weatherData.weather.length > 0 ? weatherData.weather[0].icon.slice(0, 2) : "No weather data";
    const iconToday = `https://openweathermap.org/img/wn/${weatherIcon}d@4x.png`

    const weatherDescription = weatherData.weather.length > 0 ? weatherData.weather[0].description : "No weather data";

    const weatherTemp = weatherData.main ? Math.floor(weatherData.main.temp) : "No weather data";
    const weatherFeelsLike = weatherData.main ? weatherData.main.feels_like : "No weather data";


    return (
        <div className={`${theme} container box`}>

            <div className='row'>
                <div className='col-lg-6 p-5'>


                    <div className={`${theme}Box mt-4`}>
                        <div className='row p-4'>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter location" aria-describedby="button-addon2"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value) || localStorage.setItem("city", e.target.value)} />

                                <button className="btn btn-info" type="button" id="button-addon2" onClick={handleLocationChange}>Search</button>
                            </div>
                        </div>
                    </div>


                    <div className={`${theme}Box mt-4`}>
                        <div className='p-4'>
                            {selectedCity && (
                                <h1 className='text-center'>{selectedCity.name}</h1>
                            )}
                        </div>

                        <div className='row d-flex align-items-center '>

                            <h6 className='fs-5 fw-light text-center'>{weatherDescription}</h6>
                            <div className='col-lg-4 col-sm-4 float-center text-center'>
                                <img className="img-fluid " src={iconToday} alt='current weather icon' /></div>
                            <div className="col-lg-4 col-sm-4">
                                <h1 className='display-1 fw-bold text-center'>{weatherTemp + "°"}</h1>
                            </div>
                            <div className='col-lg-4 col-sm-4 float-start'>
                                <h6 className='fs-5 fw-light text-center'>{weatherDescription}</h6>
                                <h6 className='fs-6  text-center'><span className='color1'>Hissedilen: </span>{" " + weatherFeelsLike + "°"}</h6></div>



                        </div>
                    </div>

                </div>

                <div className='col-lg-6'>

                    <div className='col-md-12 px-5 pt-md-5'>

                        <div className='row my-5 justify-content-center align-items-center'>

                            <div className='col-12 d-flex align-items-center justify-content-end'>

                                <button className='btn btn-secondary' onClick={toggleTheme}>
                                    {theme === 'light' ? (
                                        <img
                                            src='/assets/moon.png'
                                            alt='Moon Icon'
                                            width={24}
                                            height={24}
                                        />
                                    ) : (
                                        <img
                                            src='/assets/sunny.png'
                                            alt='Sun Icon'
                                            width={24}
                                            height={24}
                                        />
                                    )}
                                </button>

                            </div>
                        </div>

                        <div className={`${theme}Box mt-4`}>
                            <h3 className='p-4 color1 text-uppercase fs-5 fw-bold text-center'>5 Günlük Hava Tahmini</h3>

                            <div>deneme</div>

                        </div>

                    </div>
                </div>

            </div>

        </div>




    )
}

export default Weather