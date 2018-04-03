import React from 'react';
import * as s from './App.css';
import WeatherPage from'./components/WeatherPage';

export default class App extends React.Component {
    render() {
        return (
            <div className={s.mainContent}>
                <WeatherPage/>
            </div>
        );
    }
}