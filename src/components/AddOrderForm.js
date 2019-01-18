import React from 'react';
import uuid from 'uuid';

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: uuid(),
      userId: '',
      quantity: '',
      type: 'BUY',
      price: '',
      error: ''
    };
  }
  onUserIdChange = (e) => {
    const userId = e.target.value;
    this.setState(() => ({ userId }));
  };
  onQuantityChange = (e) => {
    const quantity = e.target.value;
    this.setState(() => ({ quantity }));

  };
  onPriceChange = (e) => {
    const price = e.target.value;

    if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ price }));
    }
  };
  onTypeChange = (e) => {
    const type = e.target.value
      this.setState(() => ({ type }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.userId || !this.state.price || !this.state.quantity || !this.state.type) {
      this.setState(() => ({ error: 'Please fill in all fields of the form.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        orderId: this.state.orderId,
        userId: this.state.userId,
        price: parseFloat(this.state.price, 10) * 100,
        type: this.state.type,
        quantity: this.state.quantity
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            name="userId"
            type="number"
            placeholder="UserId"
            autoFocus
            value={this.state.userId}
            onChange={this.onUserIdChange}
          />
          <input
            name="price"
            type="text"
            placeholder="Price £/kg"
            value={this.state.price}
            onChange={this.onPriceChange}
          />
          <input
          name="quantity"
          placeholder="Quantity (kg)"
          value={this.state.quantity}
          onChange={this.onQuantityChange}
          >
          </input>
          <select name="type" onChange={this.onTypeChange} value={this.state.type}>
            <option value="BUY">BUY</option>
            <option value="SELL">SELL</option>
          </select>
          <button className="button">Place Order</button>
        </form>
      </div>
    )
  }
}
