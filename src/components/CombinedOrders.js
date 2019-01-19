import React from 'react';
import Combined from './Combined';
// import uuid from 'uuid';
function combiningOrders (arrayOfOrderObjects) {
  let orderPriceQuantObject = {};
  for ( let i = 0; i < arrayOfOrderObjects.orders.length; i++) {
    if (!orderPriceQuantObject[arrayOfOrderObjects.orders[i].price]) {
      orderPriceQuantObject[arrayOfOrderObjects.orders[i].price] = arrayOfOrderObjects.orders[i].quantity;
    } else {
      orderPriceQuantObject[arrayOfOrderObjects.orders[i].price] += arrayOfOrderObjects.orders[i].quantity;
    }
  }
  return Object.entries(orderPriceQuantObject);
}

const CombinedOrders = (props) => {
  return(
    <div>
      { props.orders.length >= 1 && props.orders[0].type === "BUY" ?
          combiningOrders(props).reverse().map((order) => (
            <Combined
            key={order[0]}
            quantity={order[1]}
            price={order[0]}
            />
          )) :
          combiningOrders(props).map((order) => (
            <Combined
            key={order[0]}
            quantity={order[1]}
            price={order[0]}
            />
          ))
    }
    </div>
  )
}

export default CombinedOrders;
