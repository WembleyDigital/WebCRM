var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/state/:state', function (req, res) { 

    try{  title= req.params.state;

    //res.send(state);
    Mark=`state=${title}`;
    SELECTED='id,wineryName,address,city,state,postCode';
    Table='gocellar_winery_info';
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

  
  app.get('/state_vari/:varietyID', function (req, res) { 
    
      try{title= req.params.varietyID;
      Mark=`variety=${title}`;
      //res.send(state);
      SELECTED='id,wineryName,address,city,state,postCode';
      Table='gocellar_winery_info';
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
  
    app.get('/state_sub/:sub', function (req, res) { 
    
      try{title= req.params.sub;

      Mark=`sub_title=${title}`;
      // SELECTED='id,productName,description,GrapeType_id,brand_id,category_id';
      // Table='gocellar_product';
      SELECTED='id,wineryName,address,city,state,postCode';
      Table='gocellar_winery_info';
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
  

  // app.get('/state/winery', function (req, res) { 
  //   state='SA';
  //   var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where id=${state}`;
  //     connection.query(sql,function (err, result) {
  //         if(err){
  //           console.log('[SELECT ERROR] - ',err.message);
  //           return;
  //         }
  //       //res.send(myjson);
  //       res.end(JSON.stringify(result[0]));
  //        console.log('--------------------------SELECT----------------------------');
  //        console.log(result);
  //        console.log('------------------------------------------------------------\n\n');  
  //     });
  // })

  var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("NodeBegin%s:%s", host, port)
    })
    