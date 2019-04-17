import React from 'react';
import * as styles from './index.css';

const fromKelToCel = far => Math.round(far - 273.15);

const ForecastItem = props => (
    <li className={styles.cityData}>
        <div className={styles.temp}>
            {`${fromKelToCel(props.item.main.temp)}°C`}
        </div>
        <div className={styles.cityName}>
            {props.item.name}
        </div>
    </li>
);

export default ForecastItem;
