import React from 'react';
import Order from './Order';

const Orders = (props) => (
  <div>
    {
      props.orders.map((order) => (
        <Order
          key={order.orderId}
          userId={order.userId}
          quantity={order.quantity}
          price={order.price}
          type={order.type}
        />
      ))
    }
  </div>
);

export default Orders;
