import React from 'react';
import { shallow } from 'enzyme';
import ErrorModalWindow from './index.component';

describe('Error modal window', () => {

    it('Render correctly ErrorModalWindow', () => {
        const props = { "errors": [] };
        const output = shallow(
            <ErrorModalWindow {...props} />
        );
        expect(output).toMatchSnapshot();
        expect(output.find("div")).toHaveLength(0);
        expect(output.find("popup")).toHaveLength(0);
    });

    it('Render correctly ErrorModalWindow with props', () => {
        const output = shallow(
            <ErrorModalWindow errors={[{ status: 'mock', statusText: 'status2', history: {} }]} />
        );
        expect(output).toMatchSnapshot();
    });

    it('call actions after click on the button', () => {
        const mockCleanErrors = jest.fn(), mockGoBack = jest.fn();
        const props = {
            "errors": [{ status: 'mock', statusText: 'status2' }],
            cleanErrors: mockCleanErrors,
            history: { goBack: mockGoBack }
        }
        const output = shallow(
            <ErrorModalWindow {...props} />
        );

        output.find('button').simulate('click', {
          })

        expect(mockCleanErrors).toHaveBeenCalledTimes(1);
        expect(mockCleanErrors).toHaveBeenCalledTimes(1);
    })
});
