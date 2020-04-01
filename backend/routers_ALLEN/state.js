var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/state/vic', function (req, res) { 
    state='VIC';
    var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
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

  app.get('/state/nsw', function (req, res) { 
    state='NSW';
    var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
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

  app.get('/state/wa', function (req, res) { 
    state='WA';
    var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
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

  app.get('/state/sa', function (req, res) { 
    state='SA';
    var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
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

  app.get('/state/winery', function (req, res) { 
    state='SA';
    var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
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
    