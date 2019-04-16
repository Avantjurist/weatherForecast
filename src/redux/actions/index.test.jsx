import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index";
import fetchMock from "fetch-mock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
    describe("sync actions", () => {
        it('create an action to add error', () => {
            const error = "error"
            const expectedAction = {
                type: actions.ADD_ERROR,
                error
            }
            expect(actions.addError(error)).toEqual(expectedAction);
        }),
            it(`create an action to clean error`, () => {
                const expectedAction = {
                    type: actions.CLEAN_ERROR
                }
                expect(actions.cleanError()).toEqual(expectedAction);
            })
        it(`create an action to check items is loading`, () => {
            const store = mockStore({ isLoading: false })
            const expectedAction = {
                type: actions.ITEMS_IS_LOADING,
                isLoading: true
            }

            store.dispatch(actions.itemsIsLoading(true))

            expect(store.getActions()).toEqual([expectedAction]);
        })
    }),
        describe("async actions", () => {
            afterEach(() => {
                fetchMock.restore()
            })

            it("return value for correct parameters", () => {
                const store = mockStore({
                    forecasts: [],
                    isLoading: false,
                    errors: [],
                });
                const expectedActions = [{
                    type: actions.ITEMS_IS_LOADING,
                    isLoading: true
                },{
                    type: actions.ITEMS_IS_LOADING,
                    isLoading: false
                }, {
                    type: actions.ITEMS_IS_LOADING,
                    isLoading: false
                }, {
                    type: 'ITEMS_FETCH_DATA_SUCCESS',
                    items: [{ main: { temp: 278.15 } }]
                }
                ];

                fetchMock.getOnce('http://api.openweathermap.org/data/2.5/weather?q=minsk&appid=50935e47e3e45ae199d389882ea6c955', {
                    body: { coord: { lat: 53.9, lon: 27.5667 } }
                })
                fetchMock.getOnce('https://api.openweathermap.org/data/2.5/find?lat=53.9&lon=27.5667&cnt=20&appid=50935e47e3e45ae199d389882ea6c955', {
                    body: { list: [{ main: { temp: 278.15 } }] }
                })

                return store.dispatch(actions.itemsFetchData("minsk"))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions)
                    });
            })
            it("throw error for incorrect parameters", () => {
                const store = mockStore({
                    forecasts: [],
                    isLoading: false,
                    errors: [],
                });
                const expectedActions = [
                    { type: 'ITEMS_IS_LOADING', isLoading: true },
                    { type: 'ITEMS_IS_LOADING', isLoading: false },
                    { type: 'ADD_ERROR', error: { status: 404, statusText: 'Not Found' } }
                ]

                fetchMock.getOnce('http://api.openweathermap.org/data/2.5/weather?q=insk&appid=50935e47e3e45ae199d389882ea6c955',
                    {
                        status: 404,
                        body: { "cod": "404", "message": "city not found" }
                    })

                return store.dispatch(actions.itemsFetchData("insk"))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            })
            it("throw error resporse for incorrect parameters", () => {
                const store = mockStore({
                    forecasts: [],
                    isLoading: false,
                    errors: [],
                });
                const expectedActions = [
                    { type: 'ITEMS_IS_LOADING', isLoading: true },
                    { type: 'ITEMS_IS_LOADING', isLoading: false },
                    { type: 'ITEMS_IS_LOADING', isLoading: false },
                    { type: 'ADD_ERROR', "error": new Error(new Object) }
                ]

                fetchMock.getOnce('http://api.openweathermap.org/data/2.5/weather?q=insk&appid=50935e47e3e45ae199d389882ea6c955', {
                    body: { coord: { lat: 5323.9, lon: 27.5667 } }
                })
                fetchMock.getOnce('https://api.openweathermap.org/data/2.5/find?lat=5323.9&lon=27.5667&cnt=20&appid=50935e47e3e45ae199d389882ea6c955',
                    {
                        status: 400,
                        body: { "cod": "400", "message": "5323.9 is not a float" }
                    })

                return store.dispatch(actions.itemsFetchData("insk"))
                    .then(() => {
                        expect(store.getActions()).toEqual(expectedActions);
                    });
            })

        })
})