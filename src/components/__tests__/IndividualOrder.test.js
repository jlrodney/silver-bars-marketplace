import React from 'react';
import { shallow } from 'enzyme';
import IndividualOrder from '../IndividualOrder';

const order = {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
    price: 230,
    type: 'BUY'
  }
describe('Order item', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<IndividualOrder
      key={order.orderId}
      orderId={order.orderId}
      userId={order.userId}
      quantity={order.quantity}
      price={order.price}
      type={order.type}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have text associated with order', () => {
    const wrapper = shallow(<IndividualOrder
      key={order.orderId}
      orderId={order.orderId}
      userId={order.userId}
      quantity={order.quantity}
      price={order.price}
      type={order.type}
    />);
    expect(wrapper.find('p').text()).toEqual("BUY: 22 kg for £230 [1]remove");
  });
  it('should call onClick prop for invalid form submission', () => {
    const onHandleDeleteOrderSpy = jest.fn();
    const wrapper = shallow(<IndividualOrder
      key={order.orderId}
      orderId={order.orderId}
      userId={order.userId}
      quantity={order.quantity}
      price={order.price}
      type={order.type}
      handleDeleteOrder={onHandleDeleteOrderSpy}
    />);
    wrapper.find('button').simulate('click');
    expect(onHandleDeleteOrderSpy).toBeCalled();
  });
});
