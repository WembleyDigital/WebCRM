var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

  app.get('/winedetail', function (req, res) { 
    try {
        title=req.body.wine_id;
        Mark=`id=${title}`;
        SELECTED='id,productName,decription,volume';
        SELECTED='id,productName,decription,volume';
      Table='gocellar_product';
      var  sql = `SELECT ${SELECTED} FROM ${Table} Where ${Mark}`;           
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
    