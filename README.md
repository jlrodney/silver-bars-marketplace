# SilverBars Marketplace


A JavaScript implementation of a simple trading board app allowing the registering of Buy and Sell orders and displaying them on a live order board.

## Technologies

This software was written in JavaScript making use of React for the app and Jest and Enzyme for testing. Test coverage was provided by Jest and linting was provided by ESLint.

## Usage

To use this app clone this repo.
```
git clone https://github.com/jlrodney/silver-bars-marketplace.git
```
Install the dependencies
```
$ npm install
```
To run the tests, run Jest
```
$ npm test
```
To start the app
```
$ npm start
```
Then go to http://localhost:3000/ in the browser.
Fill in the fields and click place order to register an order (see screenshot below):

![SilverBars Interface](SilverBars interface.png)

## Design Decisions

This application was written in JavaScript and makes use of React and Node. Node could be useful in the future with respect to connecting the live order board up to an api as it is very good at handling multiple api requests and WebSockets could be used to handle quick data transfers.

I made use of the latest ES6 syntax including object spreading and arrow functions.

Some of the input validations are not necessary due to the form restrictions applied, however, they would be useful if this application was extended or adapted.

I fully tested this application. The test coverage was 100% for all files bar one, which is index.js which has only React setup code.  

## Further work
This application could be extended by providing user authentication to ensure each user can only delete their own orders.

## User stories
-------------

```
As a user,
So that I can determine the demand for silver bars,
I want to see a summary of orders.

As a user,
So that I can analyse the demand for silver bars,
I want to see order of the same price merged together.

As a user,
So that I can analyse the prices of silver bars,
I want to see buy orders grouped in descending price order and sell orders grouped in ascending price order.

As a user,
So that I can register an order (buy/sell),
I want to be able to upload an order to a live order board with the order quantity, price and type.

As a user,
So that I can remove an order,
I want to be be able to cancel a registered order.
```
