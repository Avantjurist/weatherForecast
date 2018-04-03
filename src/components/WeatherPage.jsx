import React from 'react';
import SearchForm from './seachForm/SearchForm';
import ResultTable from './resultTable/ResultTable';
import { Route } from 'react-router-dom';

export default class WeatherPage extends React.Component {

    render() {
        return (
            <div>
                <SearchForm/>
                <Route path="/table" component={ ResultTable } />
            </div>
        )
    }
}