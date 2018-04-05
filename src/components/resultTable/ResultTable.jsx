import React from 'react';
import ForecastItem from './forecastItem/ForecastItem';
import { connect } from 'react-redux'

class ResultTable extends React.Component {
    constructor() {
        super();
        this.state = { forecastItems: [{name: "a"}, {name: "b"}, {name: "c"}]}
    }

    render() {
        console.log("props with cities", this.props);
        return (
            <ul>{this.props.cities.map((forecastItem) => <ForecastItem key={forecastItem.id} item={forecastItem}/>)}</ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(ResultTable)