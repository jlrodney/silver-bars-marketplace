import React from 'react';

const Combined = (props) => (
  <div>
  <p>{props.quantity} kg for £{props.price/100}</p>
  </div>
);

export default Combined;
