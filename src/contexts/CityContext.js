import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({children}) => {

    const [location, setLocation] = useState(localStorage.getItem("city") || "Ankara");
    const [data, setData] = useState([]);
    const [selectedCity, setSelectedCity] =useState([]);

    const locationURL = "https://turkiyeapi.cyclic.app/api/v1/provinces";
    const fetchData = async () =>{
        const { data } = await axios.get(locationURL);
        setData(data.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const values = {
        location,
        setLocation,
        data,
        setData,
        selectedCity,
        setSelectedCity
      };

    return (
        <CityContext.Provider value={values}>
            {children}
        </CityContext.Provider>
    )
} 

export default CityContext;