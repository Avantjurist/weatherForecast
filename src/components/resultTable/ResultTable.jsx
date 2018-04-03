import React from 'react';
import ForecastItem from './forecastItem/ForecastItem';

export default class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = { forecastItems: [{name: "a"}, {name: "b"}, {name: "c"}]}
    }

    render() {
        return (
            <ul>{this.state.forecastItems.map((forecastItem) => <ForecastItem key={forecastItem.name} item={forecastItem}/>)}</ul>
        )
    }
}