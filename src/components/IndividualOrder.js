import React from 'react';

const IndividualOrder = (props) => (
  <div>
    <p>{props.type}: {props.quantity} kg for £{props.price} [{props.userId}]
      <button className="removeOrderButton"
        onClick={(e) => {
          props.handleDeleteOrder([props.orderId, props.type]);
        }}
      >
      remove
      </button>
    </p>
  </div>
);

export default IndividualOrder;
