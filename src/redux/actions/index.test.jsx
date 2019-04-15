import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index";
import fetchMock from "fetch-mock";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import MockAdapter from "axios-mock-adapter";

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

            it("case 1", () => {
                const mock = new MockAdapter(axios);

                fetchMock.getOnce('http://api.openweathermap.org/data/2.5/weather?q=insk&appid=50935e47e3e45ae199d389882ea6c955', {
                    body: { coord: { lat: 53.9, lon: 27.5667 }},
                    headers: { 'content-type': 'application/json' }
                })
                // fetchMock.getOnce('http://api.openweathermap.org/data/2.5/weather?q=minsk&appid=50935e47e3e45ae199d389882ea6c955', {
                //     body: { todos: ['do something'] },
                //     headers: { 'content-type': 'application/json' }
                // })

                const store = mockStore({
                    forecasts: [],
                    isLoading: false,
                    errors: [],
                });
                const expectedActions = [{
                    type: actions.ITEMS_IS_LOADING,
                    isLoading: true
                },
                {
                    type: actions.ITEMS_IS_LOADING,
                    bool: { isLoading: false }
                }
                ];

                mock.onGet('http://api.openweathermap.org/data/2.5/weather',
                    { params: { q: "insk", appid: "50935e47e3e45ae199d389882ea6c955"} })
                    .reply(400, { error: "error"})

                return store.dispatch(actions.itemsFetchData("minsk"))
                    .then((res) => console.log(res))
            })

        })
})