import React from 'react';
import Header from './Header';
import AddOrderForm from './AddOrderForm';
import Orders from './Orders';
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



  render() {
    return (
      <div>
        <Header />
        <p>Combined Sells</p>
        <CombinedOrders orders={this.state.sellOrders}/>
        <br/>
        <p>Combined Buys</p>
        <CombinedOrders orders={this.state.buyOrders}/>
        <AddOrderForm onSubmit={this.addOrder} />
      </div>
    );
  }
}
