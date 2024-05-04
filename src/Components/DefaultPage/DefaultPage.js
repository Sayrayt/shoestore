import React from 'react';

import DefaultPageHeader from "./DefaultPageHeader/DefaultPageHeader";
import DefaultPageCitySelectionComponent from "./DefaultPageCitySelectionComponent/DefaultPageCitySelectionComponent";
import DefaultPageNav from './DefaultPageNav/DefaultPageNav';
import Slider from './Slider/Slider';

import './DefaultPage.scss'

function DefaultPage() {
    return (
        <div className="DefaultPage">
            <DefaultPageHeader />
            <DefaultPageNav />
            <Slider />
            <DefaultPageCitySelectionComponent />
        </div>
    )
}

export default DefaultPage;