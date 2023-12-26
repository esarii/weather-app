import { useContext } from 'react'
import CityContext from '../contexts/CityContext'
import WeatherContext from '../contexts/WeatherContext'

function Weather() {

    const { location, setLocation, data, selectedCity, setSelectedCity } = useContext(CityContext);

    const { weatherData } = useContext(WeatherContext);

    const handleLocationChange = () => {
        const cityInfo = data.find((city) => city.name.toLocaleLowerCase() === location.toLocaleLowerCase());
        setSelectedCity(cityInfo);
        console.log(selectedCity);
    }

    return (
        <div className="container box">
            <div className='row'>
                <div className='col-lg-6 p-5'>

                    <div className='bg'>
                        <div className='row p-4'>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Enter location" aria-describedby="button-addon2"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value) || localStorage.setItem("city", e.target.value)} />

                                <button className="btn btn-info" type="button" id="button-addon2" onClick={handleLocationChange}>Search</button>
                            </div>
                        </div>
                    </div>


                    <div className='bg mt-4'>
                        <div className='p-4'>
                            {selectedCity && (
                                <h1 className='text-center'>{location || selectedCity.name}</h1>
                            )}
                        </div>

                        <div className='row d-flex align-items-center '>

                            <h6 className='fs-5 fw-light text-center'>{weatherData?.id}</h6>
                            {/* <div className='col-lg-4 col-sm-4 float-center text-center'>
                                      <img className="img-fluid " src={`https://openweathermap.org/img/wn/${weatherData.weather.icon.slice(0, 2)}d@4x.png`} alt='current weather icon' /></div>
                                    {/* <div className="col-lg-4 col-sm-4">
                                      <h1 className='display-1 fw-bold text-center'>{weatherData && Math.round(weatherData.main.temp) + "°"}</h1>
                                    </div>
                                    <div className='col-lg-4 col-sm-4 float-start'>
                                      <h6 className='fs-5 fw-light text-center'>{weatherData.weather.description}</h6>
                                      <h6 className='fs-6  text-center'><span className='color1'>Hissedilen: </span>{" " + Math.round(weatherData.main.feels_like) + "°"}</h6></div> */}



                        </div>
                    </div>

                </div>

                <div className='col-lg-6'>

                    <div className='col-md-12 px-5 pt-md-5'>
                        <div className='row bg'>
                            <h3 className='p-4 color1 text-uppercase fs-5 fw-bold text-center'>5 Günlük Hava Tahmini</h3>
                            <div className='row mx-auto d-flex align-items-center justify-content-center'>
                                <h5 className='color1 col-3 text-start fs-6'>denme</h5>
                                <div className="col-3"><img alt='weather icon' /></div>
                                <h6 className='color1 col-3 ps-4 text-start fs-6 fw-light'>ddd</h6>
                                <h4 className='col-3 fw-bold'> "°"</h4>

                            </div>
                        </div>
                        <div className='row my-5 justify-content-center align-items-center'>

                            <div className='col-12 d-flex align-items-center justify-content-end'>
                                <h6 className=' me-3 ms-2 mt-2'>Dark Mode</h6>
                                <label className="switch">
                                    <input type="checkbox" id="mode-switch" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>




    )
}

export default Weather