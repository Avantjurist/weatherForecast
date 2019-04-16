import reducer from "./index";
import * as types from "../actions/index";

describe("reducers", () => {
    const initialState = { "errors": [], "forecasts": [], "isLoading": false };

    it("return the initial state", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    })
    it("handle fetch forecasts", () => {
        expect(
            reducer({}, {
                type: types.ITEMS_FETCH_DATA_SUCCESS,
                items: [
                    { name: 'Yakubovka', main: { temp: 289.15 } },
                    { name: 'Homyel', main: { temp: 287.45 } },
                    { name: 'Rzhavets', main: { temp: 288.15 } }
                ]
            })
        ).toEqual({
            ...initialState,
            "forecasts": [
                { name: 'Yakubovka', main: { temp: 289.15 } },
                { name: 'Homyel', main: { temp: 287.45 } },
                { name: 'Rzhavets', main: { temp: 288.15 } }
            ]
        });
    })
    it("handle is loading", () => {
        expect(
            reducer({}, {
                type: types.ITEMS_IS_LOADING,
                isLoading: true
            })
        ).toEqual({
            ...initialState,
            "isLoading": true
        });
    })
    it("handle is loading", () => {
        expect(
            reducer({}, {
                type: types.ADD_ERROR,
                error: { status: 404, statusText: 'Not Found' }
            })
        ).toEqual({
            ...initialState,
            "errors": [{ status: 404, statusText: 'Not Found' }]
        });
    })
    it("handle clean error", () => {
        expect(
            reducer({}, {
                type: types.CLEAN_ERROR,
            })
        ).toEqual(initialState);
    })
})