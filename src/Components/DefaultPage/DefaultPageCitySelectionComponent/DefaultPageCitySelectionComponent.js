import './DefaultPageCitySelectionComponent.scss';
import DefaultPageCitySelectionList from './DefaultPageCitySelectionList/DefaultPageCitySelectionList.js';

import React, { useEffect, useState } from 'react';
import { MyContext } from '../../../Context.js';
import { useContext } from 'react';

export default function DefaultPageCitySelectionComponent() {
    const [isVisible, setIsVisible] = useState(true);

    const { city, setCity, updateCity, isChosingCityVisible, setIsChosingCityVisible } = useContext(MyContext);
    useEffect(() => {
        getCity()
            .then((data) => {
                setCity(data);
            })
            .catch((error) => {
                console.error('Ошибка при получении города:', error);
                setCity('Ошибка загрузки');
            })
    }, []);

    const handleConfirmation = () => {
        setIsVisible(false);
        updateCity(city)
    };

    const handleDeviation = () => {
        setIsChosingCityVisible(true);
    }

    return (
        <>
            <form >
                {isVisible && !localStorage.getItem('city') ? (
                    <div className="CitySelectionContainer">
                        <h2>Ваш город
                            <span>
                                {` ${city}?`}
                            </span>
                        </h2>
                        <div className='CityButtonsContainer '>
                            <button type='button' className='CityBonfirmationButton' onClick={handleConfirmation}>Да, верно</button>
                            <button type='button' className='CityChangeButton' onClick={handleDeviation}>Нет, другой</button>
                        </div>

                    </div>
                ) : null}
            </form>
            <form >
                {
                    isChosingCityVisible ? (
                        <DefaultPageCitySelectionList
                            setIsVisible={setIsVisible}
                        />
                    ) : null
                }
            </form>
        </>
    );
}

async function getCity() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const apiToken = '44684a820bab44b3857127c2570908a4';
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${apiToken}`);
        const data = await response.json();
        const city = data.results[0].components.city;
        return city;
    } catch (error) {
        throw new Error('Ошибка при получении города');
    }
}

