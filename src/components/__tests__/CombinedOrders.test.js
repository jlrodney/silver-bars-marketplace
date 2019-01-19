import React from 'react';
import { shallow, mount } from 'enzyme';
import CombinedOrders from '../CombinedOrders';

const buyOrders = [
  {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
    price: 230,
    type: 'BUY'
  },
  {
    orderId: 'xyz988',
    userId: '1',
    quantity: 222,
    price: 230,
    type: 'BUY'
  },
  {
    orderId: 'xyz987',
    userId: '3',
    quantity: 32,
    price: 2300,
    type: 'BUY'
  }
]

const sellOrders = [
  {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
    price: 230,
    type: 'SELL'
  },
  {
    orderId: 'xyz988',
    userId: '1',
    quantity: 25,
    price: 230,
    type: 'SELL'
  },
  {
    orderId: 'xyz987',
    userId: '3',
    quantity: 32,
    price: 2300,
    type: 'SELL'
  }
]
describe('Combined orders', () => {

  it('should have higher price component first for the two buy orders', () => {
    const wrapper = shallow(<CombinedOrders orders={buyOrders}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have lower price component first for the two sell orders', () => {
    const wrapper = shallow(<CombinedOrders orders={sellOrders}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
