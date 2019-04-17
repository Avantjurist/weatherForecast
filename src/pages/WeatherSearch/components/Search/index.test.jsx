import React from 'react';
import { shallow } from "enzyme";
import SearchForm from "./index.component";

describe("Seach form", () => {

    it("render correctly SearchForm", () => {
        const output = shallow(
            < SearchForm />
        );
        expect(output).toMatchSnapshot();
    })

    it("change value on typing", () => {
        const test = "test";
        const output = shallow(
            < SearchForm />
        );

        output.find('input').simulate('change', {
            target: {
                value: test
            }
        })

        expect(output.state().value).toEqual(test)
    })

    it("call actions after click search", () => {
        const mockFetchCitiesData = jest.fn();
        const props = { history: [], fetchCitiesData: mockFetchCitiesData };
        const output = shallow(
            < SearchForm {...props} />
        )

        output.find('button').simulate('click', {})

        expect(mockFetchCitiesData).toHaveBeenCalledTimes(1);
    })

    it("nothing happen on submit form", () => {
        const output = shallow(
            < SearchForm />
        )
        const mockPreventDefault = jest.fn();

        output.find('form').simulate('submit', {
            preventDefault: mockPreventDefault
        })

        expect(output.state().value).toEqual('');
    })
})