const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
var app = express();

app.use(express.static(__dirname + '/'));

require('./src/index')(app);

app.get('*', (req,res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.listen(port);
console.log('server started');