import React from 'react';
import SearchForm from './seachForm/SearchForm';
import ResultTable from './resultTable/ResultTable';
import NotFoundPage from './notFoundPage/NotFoundPage'
import * as styles from './WeatherPage.css';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class WeatherPage extends React.Component {

    render() {
        return (
            <div className={styles.weatherPage}>
                <SearchForm/>
                <Route path="/search/:city" component={ ResultTable } />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        hasError: state.hasError
    }
}

export default connect(mapStateToProps)(WeatherPage)