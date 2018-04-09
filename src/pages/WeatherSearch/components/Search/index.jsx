import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../../../redux/actions/index';
import * as styles from './index.css';

class SearchForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
    }

    handleChange = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleClick = () => {
        const { fetchCitiesData, history } = this.props;
        const { value } = this.state;
        const template = '/search/';

        history.push(template + value);
        fetchCitiesData(value);
    };

    render() {
        return (
            <form
                className={styles.searchForm}
                onSubmit={e => e.preventDefault()}
            >
                <input
                    className={styles.searchInput}
                    type="text"
                    placeholder="Your city name"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button
                    className={styles.searchButton}
                    onClick={this.handleClick}
                >Search
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCitiesData: cityName => dispatch(itemsFetchData(cityName)),
});

export default connect(null, mapDispatchToProps)(withRouter(SearchForm));

