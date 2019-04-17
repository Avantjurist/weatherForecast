import React from "react";
import { shallow } from "enzyme";
import ResultTable from "./index.component";

describe("Result table", () => {
    it("render correctly with props", () => {
        const props = { forecasts: [{id:1}, {id:2}], fetchData: jest.fn(), match: { params: { city: "test" } } };
        const output = shallow(
            < ResultTable { ...props } />
        )

        expect(output).toMatchSnapshot();
    })
})