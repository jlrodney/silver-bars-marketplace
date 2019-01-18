import React from 'react';
import { shallow } from 'enzyme';
import Order from '../Order';

const order = {
    orderId: 'xyz986',
    userId: '1',
    quantity: 22,
    price: 230,
    type: 'BUY'
  }
describe('Expense item', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Order

      key={order.orderId}
      userId={order.userId}
      quantity={order.quantity}
      price={order.price}
      type={order.type}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
