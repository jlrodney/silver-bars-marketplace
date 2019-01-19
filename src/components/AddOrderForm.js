import React from 'react';
import uuidv1 from 'uuid/v1';

export default class AddOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderId: uuidv1(),
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
    let quantity = String(e.target.value);
    if ( !quantity || quantity.match(/^\d{1,}(\.\d{0,8})?$/) ) {
      this.setState(() => ({ quantity }));
    }
  };

  onPriceChange = (e) => {
    const price = e.target.value;
    if ( !price || price.match(/^\d{1,}(\.\d{0,2})?$/) ) {
      this.setState(() => ({ price }));
    }
  };
  onTypeChange = (e) => {
    const type = e.target.value;
    this.setState(() => ({ type }));
  };

  onSubmit = (e) => {
    const orderId = uuidv1();
    this.setState(() => ({ orderId: orderId }));
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
        quantity: parseFloat(this.state.quantity, 10)
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
            type="text"
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
          type="text"
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
