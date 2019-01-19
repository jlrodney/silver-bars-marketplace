import React from 'react';
import { shallow, mount } from 'enzyme';
import Dashboard from '../Dashboard';

const buyOrder = {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
    price: 230,
    type: 'BUY'
};

const sellOrder = {
    orderId: 'xyz998',
    userId: '1',
    quantity: 222,
    price: 230,
    type: 'SELL'
};

describe('Dashboard component', () => {
  it('should render Dashboard correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('onSubmit method', () => {
  it('should update state of buyOrders accordingly', () => {
    const wrapper = mount(<Dashboard />);
    let value = 'user1';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = '33';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = 320;
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    value = "BUY";
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state().buyOrders.length).toEqual(1)
  });

  it('should update state of sellOrders accordingly and then delete it', () => {
    const wrapper = mount(<Dashboard />);
    let value = 'user1';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = '33';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = 320;
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    value = "SELL";
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state().sellOrders.length).toEqual(1);
    wrapper.find('.removeOrderButton').simulate('click');
    expect(wrapper.state().sellOrders.length).toEqual(0);
  });

  it('should update state of buy orders and then delet it', () => {
    const wrapper = mount(<Dashboard />);
    let value = 'user1';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = '33';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = 320;
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    value = "BUY";
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state().buyOrders.length).toEqual(1);
    wrapper.find('.removeOrderButton').simulate('click');
    expect(wrapper.state().buyOrders.length).toEqual(0);
  });
});
