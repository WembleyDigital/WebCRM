const express = require('express');
const router = express.Router()

router.get('/foodparing/all', async(res, req) => {
  try{
    sql = `SELECT * FROM gocellar_food_pairing`
    connection.query(sql, (err,result) => {
      if(err){
        console.log('[SELECT ERROR] - ',err.message)
        return;
      }
    })
    res.send(JSON.stringify(result[0]))
  }
      catch(err){
        res.status(500).send(err)
      }    
  })

  
router.get('/foodparing/:id', async(res,req) => { 
  try{
    id = req.params.id
    sql = `SELECT * FROM gocellar_food_paring where id =${id} `
    connection.query(sql, (err,result) => {
      if(err){
        console.log('[SELECT ERROR] - ',err.message)
        return;
      }
    })
    res.send(JSON.stringify(result[0]))
    }catch(err){
      res.status(500).send(err)
  }
  })

  router.get('/foodparing/:meat', async(res,req) => { 
    try{
      meat = req.params.meat
      sql = `SELECT * FROM gocellar_food_paring where variety =${meat} `
      connection.query(sql, (err,result) => {
        if(err){
          console.log('[SELECT ERROR] - ',err.message)
          return;
        }
      })
      res.send(JSON.stringify(result[0]))
      }catch(err){
        res.status(500).send(err)
    }
    })

  
module.exports = router



