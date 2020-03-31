var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/home/event', function (req, res) { 
    id=req.query.id;
    var  sql = `SELECT Company_type,Title FROM gocellar_Event Where id=${id}`;
      connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
        //res.send(myjson);
        res.end(JSON.stringify(result[0]));
         console.log('--------------------------SELECT----------------------------');
         console.log(result);
         console.log('------------------------------------------------------------\n\n');  
      });
  })

  app.get('/home/master', function (req, res) { 
    id=req.query.id;
    var  sql = `SELECT Company_type,Title FROM gocellar_MasterWine Where id=${id}`;
      connection.query(sql,function (err, result) {
          if(err){
            console.log('[SELECT ERROR] - ',err.message);
            return;
          }
        //res.send(myjson);
        res.end(JSON.stringify(result[0]));
         console.log('--------------------------SELECT----------------------------');
         console.log(result);
         console.log('------------------------------------------------------------\n\n');  
      });
  })

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("NodeBegin%s:%s", host, port)
    })
    