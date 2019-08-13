const bodyParser = require('body-parser');
const express = require('express');

require('dotenv').config({silent: true});

const app = express();
app.use(bodyParser.json());
require('./routers')(app);

const port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log(`The app is listening on http://localhost:${port}`);
});
