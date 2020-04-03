const express = require('express');
const router = express.Router();

router.get('/order/all', async(req, res) => {
  try {
    sql = `SELECT * FROM gocellar_order `
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

router.get('/order/:id', async(req, res) => {
    try {
    id = req.params.id
    sql = `SELECT * FROM gocellar_order where id = ${id}`
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



router.post('/order/add', async (req, res) => {
    try {
      // add validation for the req.body to prevent error
      // you could use joi for that
      const {
        receive_time,
        confirmed_time,
        shipping_time,
        complete_time,
        invocie_title,
        ship_no,
        payment,
        status,
        update_time,
        gocellar_supplier_userId,
        buyer_ship_info_id,
        supplier_id,
        paymentId,
        gocellar_buyer_id
    } = req.body

        sql = `INSERT INTO gocellar_order(
        receive_time,
        confirmed_time,
        shipping_time,
        complete_time,
        invocie_title,
        ship_no,
        payment,
        status,
        update_time,
        gocellar_supplier_userId,
        buyer_ship_info_id,
        supplier_id,
        paymentId,
        gocellar_buyer_id,) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        const sqlParams = [

        receive_time,
        confirmed_time,
        shipping_time,
        complete_time,
        invocie_title,
        ship_no,
        payment,
        status,
        update_time,
        gocellar_supplier_userId,
        buyer_ship_info_id,
        supplier_id,
        paymentId,
        gocellar_buyer_id]

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
      

  router.put('/order/allupdate/:id', async (req, res) => {
    
    try {
      id = req.params.id
      const {
            receive_time,
            confirmed_time,
            shipping_time,
            complete_time,
            invocie_title,
            ship_no,
            payment,
            status,
            update_time,
            gocellar_supplier_userId,
            buyer_ship_info_id,
            supplier_id,
            paymentId,
            gocellar_buyer_id
            } = req.body


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
        receive_time,
        confirmed_time,
        shipping_time,
        complete_time,
        invocie_title,
        ship_no,
        payment,
        status,
        update_time,
        gocellar_supplier_userId,
        buyer_ship_info_id,
        supplier_id,
        paymentId,
        gocellar_buyer_id]

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
  
})






