var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/review', function (req, res) { 
    try {
        id=req.body.id;
        var  sql = `SELECT Company_type,Title FROM gocellar_product_comment Where id='${id}`;
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
  
  app.post('/comment', urlencodedParser, function (req, res) {
    try {
        user_id=req.body.user_id;
        description=req.body.comment;
        var  addSql = `INSERT INTO gocellar_product_comment(creat_time,description,name
            ,order_item_id,user_id,description) VALUES(...,'${user_id}',${description})`;          
        
            connection.query(sql,function (err, result) {
              if(err){
                console.log('[SELECT ERROR] - ',err.message);
                return;
              }
            //res.send(myjson);
            res.send('Upload successful!');
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
    