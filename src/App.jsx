import React from 'react';
import ReactDOM from 'react-dom';
import * as s from './App.css';

export default class App extends React.Component {
    render() {
        return (
            <div className={s.mainContent}>
                aaabbb
            </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);