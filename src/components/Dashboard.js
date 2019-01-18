import React from 'react';
import Header from './Header';
import AddOrderForm from './AddOrderForm';
import Orders from './Orders';

export default class Dashboard extends React.Component {
  state = {
    buyOrders:[],
    sellOrders:[],
  };

  addOrder = (order) => {
    if (order.type === 'BUY') {
      this.setState((prevState) => ({
        buyOrders: prevState.buyOrders.concat(order)
      }));
    } else if (order.type === "SELL") {
      this.setState((prevState) => ({
        sellOrders: prevState.sellOrders.concat(order)
      }));
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Orders
          orders={this.state.buyOrders}
        />
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <Orders
          orders={this.state.sellOrders}
        />
        <AddOrderForm onSubmit={this.addOrder} />
      </div>
    );
  }
}
