import React from 'react';
import Header from './Header';

export default class Dashboard extends React.Component {
  state = {
    buyOrders:[],
    sellOrders:[],
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
