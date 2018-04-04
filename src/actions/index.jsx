export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';
const url = "http://samples.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=50935e47e3e45ae199d389882ea6c955";

export const itemsHasError = (bool) => {
    return {
        type: ITEMS_HAS_ERROR,
        hasError: bool
    }
};

export const itemsIsLoading = (bool) => {
    return {
        type: ITEMS_IS_LOADING,
        isLoading: bool
    }
};

export const itemsFetchDataSuccess = (items) => {
    return {
        type: ITEMS_FETCH_DATA_SUCCESS,
        items
    }
};

export const itemsFetchData = (url) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(url)
            .than((response) => {
            if(!response.ok) {
                throw Error(response.statusText);
            }

            dispatch(itemsIsLoading(false));

            return response
            })
            .than((response) => response.json())
            .than((items) => dispatch.itemsFetchDataSuccess(items))
            .catch(() => dispatch(itemsHasError(true)))

    }
}