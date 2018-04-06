import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/index';
import * as styles from './SearchForm.css';

class SeachForm extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleClick = () => {
        const { fetchCitiesData , history } = this.props;
        const { value } = this.state;

        history.push("/search/" + value);
        fetchCitiesData(value)
    };

    render() {
        return (
            <form className={styles.searchForm} onSubmit={e => e.preventDefault()}>
                <input className={styles.searchInput} type="text" placeholder="Your city name" value={this.state.value}
                       onChange={this.handleChange}/>
                <button className={styles.searchButton} onClick={this.handleClick}>Search</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCitiesData: (cityName) => dispatch(itemsFetchData(cityName))
    }
};

export default connect(null, mapDispatchToProps)(withRouter(SeachForm));

