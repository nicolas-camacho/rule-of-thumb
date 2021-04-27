import React from 'react';
import { shallow } from 'enzyme';

import { Navbar } from "../components";

describe('Navbar', () => {
  const shallowWrapper = shallow(<Navbar />);

  it('Snapshot test', () => {
      expect(shallowWrapper).toMatchSnapshot();
  })
});