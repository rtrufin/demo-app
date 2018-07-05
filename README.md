# Project Title

Basic project app with 3rd party public api integration and auth service

## Getting Started
### Development environment 
Clone repository


### Installing
#### backend-module: 
```sh
$ cd basic-server
$ npm install
or
$ yarn

$ node server.js 
```
Will open the backend app on port 8000

####  frontend-module: 
```sh
$ cd basic-app
$ npm install
or
$ yarn

$ yarn start
```
Will run the front-end app on port 3000

Changing the default port in the backend application implies altering the conent of `./basic-app/.env` file.

## Running the tests

#### watch mode
```sh
$ cd basic-app
$ yarn test
```

#### coverage mode
```sh
$ cd basic-app
$ yarn test:cov
```