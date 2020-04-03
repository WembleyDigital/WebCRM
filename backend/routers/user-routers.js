const express = require('express');
const router = express.Router();

router.get('/user/all', async(req, res) => {
  try {
    sql = `SELECT * FROM gocellar_user `
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

router.get('/user/:id', async(req, res) => {
    try {
    id = req.params.id
    sql = `SELECT * FROM gocellar_user where id = ${id}`
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

  router.get('/user/:username', async(req, res) => {
    try {
    username = req.params.username
    sql = `SELECT * FROM gocellar_user where username = ${username}`
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

  router.get('/user/:email', async(req, res) => {
    try {
    email = req.params.email
    sql = `SELECT * FROM gocellar_user where email = ${email}`
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


router.post('/user/add', async (req, res) => {
    try {
      // add validation for the req.body to prevent error
      // you could use joi for that
      const {       
        create_time,
        email,
        password,
        phone_number,
        status,
        update_time,
        briefDescription,
        accessToken,
        refreshToken,
        username,
        awardCreditId,
        roleId,} = req.body

        sql = `INSERT INTO gocellar_user(
          create_time,
          email,
          password,
          phone_number,
          status,
          update_time,
          briefDescription,
          accessToken,
          refreshToken,
          username,
          awardCreditId,
          roleId) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`
        const sqlParams = [
          create_time,
          email,
          password,
          phone_number,
          status,
          update_time,
          briefDescription,
          accessToken,
          refreshToken,
          username,
          awardCreditId,
          roleId]

          await connection.query(sql,sqlParams, (err,result) => {
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
      

  router.put('/user/allupdate/:id', async (req, res) => {
    id = req.params.id
    const {       
      create_time,
      email,
      password,
      phone_number,
      status,
      update_time,
      briefDescription,
      accessToken,
      refreshToken,
      username,
      awardCreditId,
      roleId} = req.body
    try {

      const sql = `UPDATE gocellar_user SET  
      create_time = ?,
      email = ?,
      password = ?,
      phone_number = ?,
      status = ?,
      update_time = ?,
      briefDescription = ?,
      accessToken = ?,
      refreshToken = ?,
      username = ?,
      awardCreditId = ?,
      roleId = ? WHERE id = ?`

      const sqlParams = [
        create_time,
        email,
        password,
        phone_number,
        status,
        update_time,
        briefDescription,
        accessToken,
        refreshToken,
        username,
        awardCreditId,
        roleId]

      sql = `INSERT INTO gocellar_user(
        create_time,
        email,
        password,
        phone_number,
        status,
        update_time,
        briefDescription,
        accessToken,
        refreshToken,
        username,
        awardCreditId,
        roleId) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`

        await connection.query(sql,sqlParams, (err,result) => {
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
  
      
  

