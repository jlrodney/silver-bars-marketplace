import React from 'react';
import { mount } from 'enzyme';
import Dashboard from '../Dashboard';

describe('Feature test', () => {
  it('should change values of all the input fields and click submit. The state of buyOrders should change accordingly and then change again once the item has been deleted', (done) => {
    const wrapper = mount(<Dashboard />);
    let value = 'user1';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = '33.89';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = "320.54";
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
    setTimeout(() => {
      expect(wrapper.state().buyOrders.length).toEqual(1);
      done();
    })
    wrapper.find('button').simulate('click');
    expect(wrapper.state().buyOrders.length).toEqual(0);
  })

  it('should change values of all the input fields and click submit. The state of sellOrders should change accordingly and then change again once the item has been deleted', (done) => {
    const wrapper = mount(<Dashboard />);
    let value = 'user1';
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    value = '33.89';
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    value = "320.54";
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
    setTimeout(() => {
      expect(wrapper.state().sellOrders.length).toEqual(1);
      done();
    })
    wrapper.find('button').simulate('click');
    expect(wrapper.state().sellOrders.length).toEqual(0);
  })
})
