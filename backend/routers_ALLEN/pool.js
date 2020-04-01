var mysql  = require('mysql');  
 
var connection = mysql.createPool({     
  host     : 'localhost',       
  user     : 'root',              
  password : '123456',       
  port: '3306',                   
  database: 'gocellar' 
}); 
 

connection.getConnection(function(err,connection) {
        if(err) {
            console.log("建立连接失败");
        }else{
            console.log("建立连接成功");

    

//var  sql = 'SELECT name,state_id FROM gocellar_city Where id=2';

    }})


    var  sql = 'SELECT Company_type,Title FROM gogogo Where id=2';
    connection.query(sql,function (err, result) {
            if(err){
              console.log('[SELECT ERROR] - ',err.message);
              return;
            }
            
           console.log('--------------------------SELECT----------------------------');
          console.log(result); console.log(result[0].Company_type);
          //  console.log(result[0].name);
           console.log('------------------------------------------------------------\n\n');  
           return result;
          }
          
          );
// connection.end();

// function mysqlQuery(){
 
//   //检索
//   this.select=function(callback){
//     var  sql = 'SELECT name,state_id FROM gocellar_city Where id=2';
//       connection.query(sql,function(err,result){
//           if(err){console.log(err)}
          
//           callback(result); // 此处直接返回 return 返回undefined, 需要使用回调函数来接收数据。
//       })
 
//   };
 
// }
 
// module.exports = mysqlQuery;
// console.log(result);