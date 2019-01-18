import React from 'react';
import { shallow } from 'enzyme';
import AddOrderForm from '../AddOrderForm';

const order = {
  orderId: 'xyz987',
  userId: '1',
  quantity: 22,
  price: 230,
  type: 'BUY',
  error: ''
}
describe('Add order form component', () => {
  it('should render form', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render form correctly with order', () => {
    const wrapper = shallow(<AddOrderForm order={order} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render place order button', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper.find('button').text()).toEqual("Place Order");
  });

  it('should render error for invalid form submission', () => {
    const wrapper = shallow(<AddOrderForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set description on input change', () => {
    const value = 'user2';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(0).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('userId')).toBe(value);
  });

  it('should set quantity on quantity change', () => {
    const value = "3";
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(2).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('quantity')).toBe(value);
  });

  it('should set price if valid input', () => {
    const value = '23.50';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('price')).toBe(value);
  });

  it('should not set price if invalid input', () => {
    const value = '12.122';
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('input').at(1).simulate('change', {
      target: { value }
    });
    expect(wrapper.state('price')).toBe('');
  });

  it('should call onSubmit prop for invalid form submission', () => {
    const wrapper = shallow(<AddOrderForm />);
    wrapper.find('form').simulate('submit', {
      preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe("Please fill in all fields of the form.");
  });
  it('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddOrderForm onSubmit={onSubmitSpy} />);
    let value = 'user1';
    wrapper.setState({ orderId: '141'})
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
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      orderId: '141',
      userId: 'user1',
      quantity: 320,
      type: 'SELL',
      price: 3300,
    });
  });
});
