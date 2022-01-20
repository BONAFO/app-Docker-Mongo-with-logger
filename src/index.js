require('dotenv').config();
const express = require("express");
const app = express();
const monguillo = require('./mongo');
const port = process.env.PORT || 3000;


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes"));



app.listen(port, () => {
  console.log(`Server on in port ${port}`);
});

