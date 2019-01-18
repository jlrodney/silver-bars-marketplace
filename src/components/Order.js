import React from 'react';

const Order = (props) => (
  <div>
  <p>
    <span>{props.userId} </span>
    <span>{props.quantity} </span>
    <span>{props.price} </span>
    <span>{props.type} </span>
  </p>
  </div>
);

export default Order;
