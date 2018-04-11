import { ADD_ERROR, CLEAN_ERROR } from '../actions/index';

const errors = (state = {}, action) => {
    switch (action.type) {
        case ADD_ERROR:
            return [...state, action.error];
        case CLEAN_ERROR:
            return [];
        default:
            return state;
    }
};

export default errors;

