import React from 'react';
import { shallow } from 'enzyme';
import generateProps from 'react-generate-props';
import { Root } from './index';

describe('Weather page', () => {
  it('should render a form with a city input', () => {
    const props = generateProps(Root);

    const wrapper = shallow(<Root {...props} />);

    expect(wrapper.find('form').length).toEqual(1);
    expect(wrapper.find('form #sourceCity').length).toEqual(1);
  });
});
