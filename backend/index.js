// const serverless = require('serverless-http');
const express = require('express');
// const route = require("./routers/vineyard-router")
// const Sequelize = require('sequelize');
var SequelizeAuto = require('sequelize-auto')
const models = require('./mySQL_demo/models')
const app = express();
const morgan = require('morgan')


const cors = require('cors')

const PORT = process.env.PORT || 5000
// const auto = new SequelizeAuto('gocellar', 'root', 'm6513M4178');
// auto = new SequelizeAuto('gocellar', 'root', 'm6513M4178', {
//     host: 'localhost',
//     dialect: 'mysql',
//     directory: './mySQL_demo/models', // prevents the program from writing to disk
//     port: '3306',
//     additional: {
//         timestamps: false
//         //...
//     }
// })

// const mysql  = require('mysql');  
 
// const connection = mysql.createPool({     
//   host     : 'localhost',       
//   user     : 'root',              
//   password : 'm6513M4178',       
//   port: '3306',                   
//   database: 'gocellar' 
// }); 
 
// connection.getConnection(function(err){
//   if(err){
//     console.log('failed');
//   }else{
//     console.log('success')
  
//   }
// });
 
// var  sql = 'SELECT * FROM vineyard WHERE id = 1';
// //查
// connection.query(sql,function (err, result) {
//         if(err){
//           console.log('[SELECT ERROR] ： ',err.message);
//           return;
//         }
      
//       vineyard = result[0]
//       console.log(vineyard)
//     });
//       // console.log(Object.values(vineyard))
//       // console.log (vineyard.id)
       
//       // JSON.stringify(JSON.parse(results))
//       //  const str=JSON.stringify(result)
//       //  console.log(str)
//       //  const json =  JSON.parse(str)
//       //  console.log(json)
//       //  console.log(json[0].id)





// router.patch('/order/partupdate/:id', async(req, res) => {
//   const order = await Vineyard.update({



//   })
//   res.send(order)

    

// })



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'))






  // module.exports.handler = serverless(app);

  app.use('/', require('./routers/vineyard-router'))
  app.listen(PORT, () => console.log(`Listening on: 5000`))

  // module.exports = app

  // module.exports = connection