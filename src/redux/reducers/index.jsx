import { combineReducers } from 'redux';
import forecasts from './forecasts';
import isLoading from './forecastIsLoading';
import errors from './errors';

export default combineReducers({
    forecasts,
    isLoading,
    errors,
});
