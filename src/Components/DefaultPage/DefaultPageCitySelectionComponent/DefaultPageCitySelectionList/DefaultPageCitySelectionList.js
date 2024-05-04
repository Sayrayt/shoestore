import './DefaultPageCitySelectionList.scss';
import citiesJSON from '../../../../data/selectionCities/cities.json';

import { MyContext } from '../../../../Context';
import { useContext } from 'react';

const supportedLetters = ['А', 'Б', 'В', 'Г'];

function DefaultPageCitySelectionList(props) {
    const cities = citiesJSON;
    const { city, updateCity, setIsChosingCityVisible, isChosingCityVisible } = useContext(MyContext);

    function changeOfCity(city) {
        props.setIsVisible(false);
        setIsChosingCityVisible(false);
        updateCity(city)
    }

    if (isChosingCityVisible) {
        return (
            <div className='DefaultPageCitySelectionList'>
                <span>Выберите город</span>
                <input placeholder='Поиск'></input>
                <span>Ваш город это <span className='city'>{!localStorage.getItem('city') ? city : localStorage.getItem('city')}</span></span>
                <div>
                    {supportedLetters.map((letter, i) =>
                        <ul className='searchLetter' key={i}>
                            <span>{letter}</span>
                            <div>
                                {cities.map((obj, index) => obj.city[0] === supportedLetters[i] && index < 30
                                    ? <li onClick={() => {
                                        changeOfCity(obj.city)

                                    }}
                                        key={index}>
                                        {obj.city}
                                    </li>
                                    : null)
                                }
                            </div>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}
export default DefaultPageCitySelectionList;