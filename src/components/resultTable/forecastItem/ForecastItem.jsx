import React from 'react';
import * as styles from './ForecastItem.css'

const fromKelToCel = (far) => {
    return Math.round(far - 273.15)
};

const ForecastItem = (props) => {
    return (
        <li className={styles.cityData}>
            <div className={styles.temp}>
                {fromKelToCel(props.item.main.temp) + '°C'}
            </div>
            <div className={styles.cityName}>
                {props.item.name}
            </div>
        </li>
        )
}

export default ForecastItem