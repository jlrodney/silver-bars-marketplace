import React from 'react';
import { shallow } from 'enzyme';
import Header from '../Header';

describe('Header should render  correctly', () => {
  it('should have headline', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').text()).toEqual("SilverBars Marketplace");
  })
  it('should have a subheadling', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h2').text()).toEqual("Live order board");
  })
});

describe('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
})
