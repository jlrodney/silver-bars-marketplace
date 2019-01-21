import React from 'react';
import { shallow } from 'enzyme';
import FormErrors from '../FormErrors';

describe('FormErrors should render  correctly', () => {
  it('should render errors', () => {
    const wrapper = shallow(<FormErrors formErrors={{type: "Test error ", string: "Test 2 error"}}/>);
    expect(wrapper.find('p').text()).toEqual("Test error Test 2 error");
  })
  it('should render an empty string when no errors are passed', () => {
    const wrapper = shallow(<FormErrors formErrors={{}}/>);
    expect(wrapper.find('p').text()).toEqual("");
  })
});

describe('should render FormErrors correctly', () => {
  const wrapper = shallow(<FormErrors />);
  expect(wrapper).toMatchSnapshot();
})
