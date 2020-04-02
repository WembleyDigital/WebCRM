var express = require('express');
var app = express(); 
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/home/event', function (req, res) { 
    try{
      title=req.query.userid;
    Mark=`userid=${title}`;
    SELECTED='id,content';
    Table='gocellar_Event';
    var  sql = `SELECT ${SELECTED} FROM ${Table} Where ${Mark}`;
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
      });}
      catch(err) {
        res.status(500).send(err)
        }
  })

  app.get('/home/master', function (req, res) { 
    try{
      Mark=``;
      SELECTED='id,Name';
      Table='gocellar_MasterWine';
      var  sql = `SELECT ${SELECTED} FROM ${Table} order by ${Mark} desc limit 10`;
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
      });}
      catch(err) {
        res.status(500).send(err)
        }
  })

  app.get('/home/winery', function (req, res) { 
    try{
      //title= req.params.varietyID;
    Mark=``;
    //res.send(state);
    SELECTED='id,wineryName,address,city,state,postCode';
    Table='gocellar_winery_info';
    //var  sql = `SELECT ${SELECTED} FROM ${Table} Where ${Mark}`;
    var  sql = `SELECT ${SELECTED} FROM ${Table} order by ${Mark} desc limit 10`;
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
      });}
      catch(err) {
        res.status(500).send(err)
        }
  })

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("NodeBegin%s:%s", host, port)
    
    })
    