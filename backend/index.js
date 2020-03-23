const serverless = require('serverless-http');
const express = require('express');
var SequelizeAuto = require('sequelize-auto')
const app = express();
const morgan = require('morgan')
const models = require('./mySQL_demo/models')
// const mysql = require('mysql');
const cors = require('cors')

const PORT = process.env.PORT || 5000

const auto = new SequelizeAuto('gocellar', 'root', 'm6513M4178', {
    host: 'localhost',
    dialect: 'mysql',
    directory: './mySQL_demo/models', // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: false
        //...
    },
    tables: ['table1', 'table2', 'table3']
    //...
})


auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'))



// app.get('/api/info', (req, res) => {
//   res.send({ application: 'sample-app', version: '1' });
// });
// app.post('/api/v1/getback', (req, res) => {
//   res.send({ ...req.body });

models.sequelize.sync().then(function() {
  /**
   * Listen on provided port, on all network interfaces.
   */
  server.listen(PORT, function() {
      debug('Express server listening on port ' + server.address().PORT);
  });
  server.on('error', onError);
  server.on('listening', onListening);
});



  // module.exports.handler = serverless(app);



  // app.listen(PORT, () => console.log(`Listening on: 5000`))