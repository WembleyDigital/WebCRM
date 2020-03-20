const serverless = require('serverless-http');
const express = require('express');
const app = express();

const morgan = require('morgan')
// const mysql = require('mysql');
const cors = require('cors')

const PORT = process.env.PORT || 5000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'))



app.get('/api/info', (req, res) => {
  res.send({ application: 'sample-app', version: '1' });
});
app.post('/api/v1/getback', (req, res) => {
  res.send({ ...req.body });

  app.listen(PORT, () => console.log(`Listening on: 5000`))

  module.exports.handler = serverless(app);


