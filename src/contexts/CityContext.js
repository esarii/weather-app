import { createContext, useState, useEffect } from "react";
import axios from "axios";

const CityContext = createContext();

export const CityProvider = ({children}) => {

    const [location, setLocation] = useState(localStorage.getItem("city") || "Adana");
    const [data, setData] = useState([]);
    const [selectedCity, setSelectedCity] =useState([]);

    const locationURL = "https://turkiyeapi.cyclic.app/api/v1/provinces";

    useEffect(() => {
        axios(locationURL)
            .then((res) => setData(res.data.data))
            .catch((error) => {
                console.error("Error:", error);
            })
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