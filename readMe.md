# Node Js - recovers the bitcoin price

## SUMMARY
The code in the btc.js file uses the axios library to make a request to a site API (https://www.coindesk.com) that returns the current bitcoin exchange rate based on the requested currency. If no currency is specified as a command line argument, the default currency is the Euro. The code also checks if the requested currency is supported by the API, and raises an error if it is not. Finally, the code displays the exchange rate and the time of the last API update.

## USE

### Initialisation of project

who to install dependecies
```sh
npm install
```

### Dependencies

| Dependencies             | Documentation                                                                |
| ----------------- | ------------------------------------------------------------------ |
| nodemon | npm i -D nodemon (https://www.npmjs.com/package/nodemon) |
| axios | npm i axios (https://www.npmjs.com/package/axios) |
