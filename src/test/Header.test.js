import React from 'react';
import { shallow } from 'enzyme';

import { Header } from "../components";

describe('Header', () => {
  const shallowWrapper = shallow(<Header />);

  it('Snapshot test', () => {
      expect(shallowWrapper).toMatchSnapshot();
  })
});