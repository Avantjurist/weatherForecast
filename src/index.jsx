import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import routes from './routers';
import store from './redux/store';
import App from './pages/WeatherSearch/index';

render((
    <Provider store={store}>
        <Router>
            <App>
                {routes}
            </App>
        </Router>
    </Provider>
), document.getElementById('root'));
