import React from 'react';
import IndividualOrder from './IndividualOrder';

const TotalOrders = (props) => (
  <div>
    <div> <p>All orders</p>
    {
      props.sellOrders.map((order) => (
        <IndividualOrder
          key={order.orderId}
          orderId={order.orderId}
          userId={order.userId}
          quantity={order.quantity}
          price={order.price}
          type={order.type}
          handleDeleteOrder={props.handleDeleteOrder}
        />
      ))
    }
    </div>
    <div>
    {
      props.buyOrders.map((order) => (
        <IndividualOrder
          key={order.orderId}
          orderId={order.orderId}
          userId={order.userId}
          quantity={order.quantity}
          price={order.price}
          type={order.type}
          handleDeleteOrder={props.handleDeleteOrder}
        />
      ))
    }
    </div>
  </div>
);

export default TotalOrders;
