import React from 'react';
import { shallow } from 'enzyme';

import { TipBottom, TipTop } from "../components";

describe('Tips', () => {
    const shallowWrapperTop = shallow(<TipTop />);
    const shallowWrapperBottom = shallow(<TipBottom />);

    it('Snapshot test Tip Top', () => {
        expect(shallowWrapperTop).toMatchSnapshot();
    });

    it('Snapshot test Tip Bottom', () => {
    expect(shallowWrapperBottom).toMatchSnapshot();
    });
});