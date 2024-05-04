import './DefaultPageHeader.scss';
import logo from '../../../data/images/defaultPage/Header/logo.png'
import Button from '../../Button/Button.js';

import { MyContext } from '../../../Context.js';
import { useContext } from 'react';


export default function DefaultPageHeader() {

    const { city, setIsChosingCityVisible } = useContext(MyContext);

    return (
        <header className="Header">
            <section className='HeaderInformation'>
                <div className="LogotypeContainer">
                    <img src={logo} alt='Logotype' />
                    <span>Найк</span>
                </div>
                <div className="ShoeStoreLocationContainer">
                    <span> {`Город доставки `}
                        <span className='city' onClick={() => { setIsChosingCityVisible(true) }}> {
                            !localStorage.getItem('city')
                                ? city
                                : localStorage.getItem('city')}</span>
                    </span>
                </div>
            </section>
            <div className="Profile">
                <Button variant={'Outline'} text={'Войти'} />
            </div>
        </header>
    )
}

