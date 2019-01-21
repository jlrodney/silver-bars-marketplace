import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Dashboard';
import Header from '../Header';
import AddOrderForm from '../AddOrderForm';
import TotalOrders from '../TotalOrders';
import CombinedOrders from '../CombinedOrders';
const buyOrder1 = {
  orderId: 'xyz986',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'BUY'
}
const buyOrder2 = {
  orderId: 'xyz123',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'BUY'
}
const sellOrder1 = {
  orderId: 'xyz987',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'SELL'
}
const sellOrder2 = {
  orderId: 'xyz234',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'SELL'
}
describe('Dashboard component', () => {
  it('should render Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render divs correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find("div").length).toEqual(4);
  });
  it('should render ps correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.find("p").length).toEqual(2);
  });
  it('should render Header correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });
  it('should render Add order correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<AddOrderForm />)).toBe(true);
  });
  it('should render TotalOrders correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<TotalOrders />)).toBe(true);
  });
  it('should render CombinedOrders correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<CombinedOrders />)).toBe(true);
  });
});

describe('Dashboard methods', () => {
  it('addOrder should add an order to the sell order state', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.instance().addOrder(sellOrder1)
    expect(wrapper.state().sellOrders.length).toEqual(1)
  })
  it('addOrder should add an order to the buy order state', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.instance().addOrder(buyOrder1)
    expect(wrapper.state().buyOrders.length).toEqual(1)
  })
  it('addOrder should add an order to the and then handleDeleteOrder should remove it  state', () => {
    const wrapper = shallow(<Dashboard />);
    wrapper.instance().addOrder(buyOrder1);
    wrapper.instance().addOrder(buyOrder2);
    wrapper.instance().addOrder(sellOrder1);
    wrapper.instance().addOrder(sellOrder2);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().buyOrders.length).toEqual(2);
    expect(wrapper.state().sellOrders.length).toEqual(2);
    wrapper.instance().handleDeleteOrder(["xyz986","BUY"]);
    wrapper.instance().handleDeleteOrder(["xyz987", "SELL"]);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.state().buyOrders[0].orderId).not.toEqual("xyz986");
    expect(wrapper.state().sellOrders[0].orderId).not.toEqual("xyz987");
  })


})
