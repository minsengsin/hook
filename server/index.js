const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
let app = express();


app.use(express.static(__dirname + '/../client/dist/'))
app.use(bodyParser.json());
app.set('port', 8000)



app.listen(app.get('port'), function() {
  console.log('listening on port 8000!');
});
