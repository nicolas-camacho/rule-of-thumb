import React from 'react';
import { shallow } from 'enzyme';

import { Footer } from "../components";

describe('Footer', () => {
  const shallowWrapper = shallow(<Footer />);

  it('Snapshot test', () => {
      expect(shallowWrapper).toMatchSnapshot();
  })
});