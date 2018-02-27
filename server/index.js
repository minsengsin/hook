const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var session = require('express-session');
let app = express();



app.use(express.static(__dirname + '/../client/dist/'))
app.use(bodyParser.json());
app.set('port', 8000);


app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'someString',
  cookie: {maxAge : 600000}
}));




app.listen(app.get('port'), function() {
  console.log('listening on port 8000!');
});
