import React from 'react';
import Header from './Header';
import AddOrderForm from './AddOrderForm';
import TotalOrders from './TotalOrders';
import CombinedOrders from './CombinedOrders';

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

  handleDeleteOrder = (orderToRemove) => {
    if (orderToRemove[1] === "BUY") {
      this.setState((prevState) => ({
        buyOrders: prevState.buyOrders.filter((order) => orderToRemove[0] !== order.orderId)
      }));
    } else if (orderToRemove[1] === "SELL") {
      this.setState((prevState) => ({
        sellOrders: prevState.sellOrders.filter((order) => orderToRemove[0] !== order.orderId)
      }));
    }
  };

  render() {
    return (
      <div>
        <Header />
        <AddOrderForm onSubmit={this.addOrder} />
        <p>Sells</p>
        <CombinedOrders orders={this.state.sellOrders}/>
        <br/>
        <p>Buys</p>
        <CombinedOrders orders={this.state.buyOrders}/>
        <br />
        <TotalOrders
          buyOrders={this.state.buyOrders}
          sellOrders={this.state.sellOrders}
          handleDeleteOrder={this.handleDeleteOrder}
        />
      </div>
    );
  }
}
