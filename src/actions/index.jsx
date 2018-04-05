export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

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

export const itemsFetchData = (cityName) => {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&sensor&key=AIzaSyByRLaRXM-A475vdODYdnICl-K0O2tbyd4`)
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));
                return response
            })
            .then((response) => response.json())
            .then((items) =>
                fetch(`https://api.openweathermap.org/data/2.5/find?lat=${items.results[0].geometry.location.lat}&lon=${items.results[0].geometry.location.lng}&cnt=20&appid=50935e47e3e45ae199d389882ea6c955`)
                    .then((response) => response.json())
                    .then((items) => dispatch(itemsFetchDataSuccess(items.list)))
            )
            .catch(() => dispatch(itemsHasError(true)))
    }
}