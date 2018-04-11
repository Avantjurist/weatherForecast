import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForecastItem from './components/Forecast/index';
import * as styles from './index.css';
import { itemsFetchData } from '../../../../redux/actions/index';

class ResultTable extends Component {
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

const mapStateToProps = ({ forecasts }) => ({ forecasts });// state => {forecasts:state.forecasts}

const mapDispatchToProps = dispatch => ({
    fetchData: cityName => dispatch(itemsFetchData(cityName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);
