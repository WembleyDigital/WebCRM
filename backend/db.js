const mysql  = require('mysql');  
 
const connection = mysql.createPool({     
  host     : 'localhost',       
  user     : 'root',              
  password : 'm6513M4178',       
  port: '3306',                   
  database: 'gocellar' 
}); 
 
connection.getConnection(function(err){
  if(err){
    console.log('failed');
  }else{
    console.log('success')
  
  }
});

module.exports = connection