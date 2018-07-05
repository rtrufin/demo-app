const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors')

const port = 8000;
app.use(cors())
app.options('*', cors()) 


app.use(bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));


const authData = require('./app/data/authData.json')


require('./app/routes')(app, authData);

app.listen(port, () => {
    console.log('Listening on: ' + port);
  });