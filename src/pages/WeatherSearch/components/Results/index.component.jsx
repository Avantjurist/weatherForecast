import React, { Component } from 'react';
import ForecastItem from './components/Forecast/index';
import * as styles from './index.css';

export default class ResultTable extends Component {
    componentWillMount() {
        this.props.fetchData(this.props.match.params.city);
    }

    render() {
        return (
            <ul className={styles.citiesList}>
                {this.props.forecasts.map(forecastItem =>
                    (<ForecastItem
                        key={forecastItem.id}
                        item={forecastItem}
                    />))}
            </ul>
        );
    }
}