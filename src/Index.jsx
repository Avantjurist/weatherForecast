import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import App from './App';

render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
)