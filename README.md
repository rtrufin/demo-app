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

Login with the following credentials:
"email": "john.doe@auth.com",
"password": "pass2word"

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


## TO-DO
- Increase test coverage (bad behavior: focusing only on delivering),
- Investigate the unnecessary renders on the forms
- extend the authentication app (my first endpoint) :D
- more refactoring on pages
