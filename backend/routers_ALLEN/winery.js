var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/wineryinfo', function (req, res) { 
    try {
      title=req.query.wineryID;
      Mark=`id=${title}`;
      SELECTED='id,wineryName,address,city,state,postCode,description,telephone';
    Table='gocellar_winery_info';
    var  sql = `SELECT ${SELECTED} FROM ${Table} Where ${Mark}`; 
//var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where winery='${winery}`;
          connection.query(sql,function (err, result) {
              if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
              }
            //res.send(myjson);
            res.send(JSON.stringify(result[0]));
             console.log('--------------------------SELECT----------------------------');
             console.log(result);
             console.log('------------------------------------------------------------\n\n');  
          });
        } catch(err) {
        res.status(500).send(err)
        }
  })
  
  app.get('/wineinfo/winelist', function (req, res) { 
    try {
      title=req.query.wineryID;
      Mark=`Brand_id=${title}`;
      SELECTED='id,productName,decription,volume';
    Table='gocellar_product';
    var  sql = `SELECT ${SELECTED} FROM ${Table} Where ${Mark}`; 
//var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where winery='${winery}`;
          connection.query(sql,function (err, result) {
              if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
              }
            //res.send(myjson);
            res.send(JSON.stringify(result[0]));
             console.log('--------------------------SELECT----------------------------');
             console.log(result);
             console.log('------------------------------------------------------------\n\n');  
          });
        } catch(err) {
        res.status(500).send(err)
        }
  })


  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("NodeBegin%s:%s", host, port)
    })
    