var express = require('express');
var app = express();

var server = app.listen(3000, function() {
  console.log('Listening to port', server.address().port);
});

// sWmsVOKo5dvkgiEuL07K2bxhYCgCfkffvrrAWdIU