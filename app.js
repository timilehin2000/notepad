const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const noteRouter = require('./routes/noteRoutes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('Hello from the middleware');
  next();
});

app.use('/notes', noteRouter);

module.exports = app;
