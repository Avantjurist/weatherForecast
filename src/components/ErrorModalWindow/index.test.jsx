import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import ErrorModalWindow from './index.component';

describe('test', () => {
    it('ErrorModalWindow should render correctly', () => {
        const output = shallow(
            <ErrorModalWindow errors={[]} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
    it('ErrorModalWindow should render correctly bla', () => {
        const output = shallow(
            <ErrorModalWindow errors={[{status: 'mock', statusText: 'cock'}]} />
        );
        expect(shallowToJson(output)).toMatchSnapshot();
    });
});
