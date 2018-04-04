import {
    ITEMS_HAS_ERROR,
    ITEMS_IS_LOADING,
    ITEMS_FETCH_DATA_SUCCESS
} from '../actions/index';

const initialState = {
    cities: [],
    hasError: false,
    isLoading: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEMS_HAS_ERROR:
            return {
                ...state,
                hasError: action.hasError
            };
        case ITEMS_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };
        case ITEMS_FETCH_DATA_SUCCESS:
            return {
                ...state,
                cities: action.items
            };

        default:
            return state;
    }
};

export default reducer