import React from 'react';
import Combined from './Combined';
// import uuid from 'uuid';
function combiningOrders (arrayOfObjects) {
  let orderPriceQuantObject = {};
  for ( let i = 0; i < arrayOfObjects.orders.length; i++) {
    if (!orderPriceQuantObject[arrayOfObjects.orders[i].price]) {
      orderPriceQuantObject[arrayOfObjects.orders[i].price] = arrayOfObjects.orders[i].quantity;
    } else {
      orderPriceQuantObject[arrayOfObjects.orders[i].price] += arrayOfObjects.orders[i].quantity;
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
