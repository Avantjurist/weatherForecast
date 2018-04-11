import { ITEMS_FETCH_DATA_SUCCESS } from '../actions/index';

const forecasts = (state = [], action) => {
    switch (action.type) {
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        default:
            return state;
    }
};

export default forecasts;
