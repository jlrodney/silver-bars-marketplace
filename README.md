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
