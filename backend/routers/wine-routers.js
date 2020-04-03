const express = require('express');
const router = express.Router();

router.get('/wine/all', async(req, res) => {
    try{
        sql = `SELECT * FROM gocellar_winery_info`
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
    
router.get('/wine/:id', async(req, res) => {
    try {
    id = req.param.id
    sql = `SELECT * FROM gocellar_winery_info where id = ${id}`
        connection.query(sql, (err,result) => {
          if(err){
            console.log('[SELECT ERROR] - ',err.message)
            return;
          }
          result = JSON.stringify(result[0])
        })
        res.send(result)
      }
          catch(err){
            res.status(500).send(err)
          }    
      })

router.get('/wine/:state', async(req, res) => {
    try {
        sql = `SELECT * FROM gocellar_winery_info where state = ${state}`
    await connection.query(sql, (err,result) => {
        if(err){
          console.log('[SELECT ERROR] - ',err.message)
          return;
        }
        result = JSON.stringify(result[0])
      })
      res.send(result)
    }
        catch(err){
          res.status(500).send(err)
        }    
    })
  


router.get('/wine/:type', async(req, res) => {
    try {
    const type = req.params.type
    sql = `SELECT * FROM gocellar_winery_info where type = ${type}`
    await connection.query(sql, (err,result) => {
        if(err){
          console.log('[SELECT ERROR] - ',err.message)
          return;
        }
        result = JSON.stringify(result[0])
      })
      res.send(result)
    }
        catch(err){
          res.status(500).send(err)
        }    
    })
  

