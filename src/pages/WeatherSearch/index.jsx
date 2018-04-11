import React from 'react';
import SearchForm from './components/Search/index';
import ErrorModalWindow from './components/ErrorModalWindow/index';
import * as s from './index.css';

export default class App extends React.Component {
    render() {
        return (
            <div className={s.mainContent}>
                <SearchForm />
                {this.props.children}
                <ErrorModalWindow />
            </div>
        );
    }
}
