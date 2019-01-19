import React from 'react';

const Combined = (props) => (
  <div>
  <p>{props.quantity} kg for £{(props.price)}</p>
  </div>
);

export default Combined;
