import React from 'react';
import { shallow } from 'enzyme';
import TotalOrders from '../TotalOrders';

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
  it('should render Orders with indivual  orders', () => {
    const wrapper = shallow(<TotalOrders buyOrders={buyOrders} sellOrders={sellOrders}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Orders with All orders header', () => {
    const wrapper = shallow(<TotalOrders buyOrders={buyOrders} sellOrders={sellOrders} />);
    expect(wrapper.find('p').text()).toEqual('All orders');
  });
});
