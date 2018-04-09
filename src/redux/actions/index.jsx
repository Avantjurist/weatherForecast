export const ITEMS_HAS_ERROR = 'ITEMS_HAS_ERROR';
export const ITEMS_IS_LOADING = 'ITEMS_IS_LOADING';
export const ITEMS_FETCH_DATA_SUCCESS = 'ITEMS_FETCH_DATA_SUCCESS';

export const itemsHasError = bool => ({
    type: ITEMS_HAS_ERROR,
    hasError: bool,
});

export const itemsIsLoading = bool => ({
    type: ITEMS_IS_LOADING,
    isLoading: bool,
});

export const itemsFetchDataSuccess = items => ({
    type: ITEMS_FETCH_DATA_SUCCESS,
    items,
});

export const itemsFetchData = (cityName = '') => (dispatch => {
    dispatch(itemsIsLoading(true));
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=50935e47e3e45ae199d389882ea6c955`)
        .then(response => {
            dispatch(itemsIsLoading(false));
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsHasError(false));
            return response;
        })
        .then(response => response.json())
        .then(items =>
            fetch(`https://api.openweathermap.org/data/2.5/find?lat=${items.coord.lat}&lon=${items.coord.lon}&cnt=20&appid=50935e47e3e45ae199d389882ea6c955`)
                .then(response => {
                    dispatch(itemsIsLoading(false));
                    if (!response.ok) {
                        throw Error(response.statusText);
                    }
                    dispatch(itemsHasError(false));
                    return response;
                })
                .then(response => response.json())
                .then(cities => dispatch(itemsFetchDataSuccess(cities.list)))
        )
        .catch(() => dispatch(itemsHasError(true)));
});
