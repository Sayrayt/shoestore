import { createContext, useState } from 'react'

export const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [city, setCity] = useState('Москва');
    const [isChosingCityVisible, setIsChosingCityVisible] = useState(false);

    const updateCity = (newCity) => {
        setCity(newCity);
        localStorage.setItem('city', newCity);
    };

    return (
        <MyContext.Provider value={{ city, updateCity, setCity, isChosingCityVisible, setIsChosingCityVisible }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
