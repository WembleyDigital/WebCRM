var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get('/winelist', function (req, res) { 
    try {
        winery=req.body.winery;
        var  sql = `SELECT Company_type,Title FROM gocellar_winery_info Where winery='${winery}`;
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
  
  app.get('/winedetail', function (req, res) { 
    try {
        wine_id=req.body.wine_id;
        var  sql = `SELECT Company_type,Title FROM gocellar_winery_product Where id='${wine_id}`;
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
    