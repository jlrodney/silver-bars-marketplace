import React from 'react';
import { shallow, mount } from 'enzyme';
import Orders from '../Orders';

const buyOrders = [
  {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
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
    orderId: 'xyz998',
    userId: '1',
    quantity: 222,
    price: 230,
    type: 'SELL'
  },
  {
    orderId: 'xyz989',
    userId: '2',
    quantity: 22,
    price: 230,
    type: 'SELL'
  }
]
describe('Orders component', () => {
  it('should render Orders with indivual orders', () => {
    const wrapper = shallow(<Orders orders={buyOrders} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Orders with indivual orders', () => {
    const wrapper = shallow(<Orders orders={sellOrders} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Orders with an empty message', () => {
    const wrapper = shallow(<Orders orders={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
