const express = require('express');
const Booking = require('../database');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

