// const serverless = require('serverless-http');
const express = require('express');
// const route = require("./routers/vineyard-router")
// const Sequelize = require('sequelize');
var SequelizeAuto = require('sequelize-auto')
const models = require('./mySQL_demo/models')
const app = express();
const morgan = require('morgan')

// const mysql = require('mysql');
const cors = require('cors')

// const PORT = process.env.PORT || 5000
// const auto = new SequelizeAuto('gocellar', 'root', 'm6513M4178');
auto = new SequelizeAuto('gocellar', 'root', 'm6513M4178', {
    host: 'localhost',
    dialect: 'mysql',
    directory: './mySQL_demo/models', // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: false
        //...
    }
   
})




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'))



// app.get('/api/info', (req, res) => {
//   res.send({ application: 'sample-app', version: '1' });
// });
// app.post('/api/v1/getback', (req, res) => {
//   res.send({ ...req.body });

// models.sequelize.sync().then(function() {
//   /**
//    * Listen on provided port, on all network interfaces.
//    */
//   server.listen(PORT, function() {
//       debug('Express server listening on port ' + server.address().PORT);
//   });
//   server.on('error', onError);
//   server.on('listening', onListening);
// });



  // module.exports.handler = serverless(app);

  app.use('/', require('./routers/vineyard-router'))
  app.listen(PORT, () => console.log(`Listening on: 5000`))