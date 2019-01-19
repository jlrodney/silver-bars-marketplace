import React from 'react';
import { shallow } from 'enzyme';
import Combined from '../Combined';

const order = [ 22, 230 ]
describe('Expense item', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Combined
      key={order[0]}
      quantity={order[1]}
      price={order[0]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<Combined
      key={order[0]}
      quantity={order[1]}
      price={order[0]}
    />);
    expect(wrapper.find('p').text()).toEqual('230 kg for £0.22');
  });
});
