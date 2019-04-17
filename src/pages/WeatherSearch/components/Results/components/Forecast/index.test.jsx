import React from "react";
import { shallow } from "enzyme";
import ForecastItem from "./index.component";

describe("Forecast item", () => {
    it("render corectly with props", () => {
        const props = {
            item: {
                main: {
                    temp: 123
                },
                name: "test"
            }
        };
        const output = shallow(
            <ForecastItem {...props} />
        );

        expect(output).toMatchSnapshot();
    })
})