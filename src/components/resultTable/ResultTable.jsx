import React from 'react';
import ForecastItem from './forecastItem/ForecastItem';
import * as styles from './ResultTable.css';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/index';

class ResultTable extends React.Component {

    componentWillMount() {
        this.props.fetchData(this.props.match.params.city);
    }

    render() {
        // if (this.props.hasErrored) {
        //     return <p>Sorry! There was an error loading the items</p>;
        // }
        // if (this.props.isLoading) {
        //     return <p>Loading…</p>;
        // }
        return (
            <ul className={styles.citiesList}>
                {this.props.cities.map((forecastItem) =>
                    <ForecastItem key={forecastItem.id} item={forecastItem}/>)}
            </ul>
        );
    }
}

const mapStateToProps = ({ cities }) => {
    return {
        cities,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (cityName) => dispatch(itemsFetchData(cityName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultTable);