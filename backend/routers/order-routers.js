const express = require('express');
const router = express.Router();



router.get('/order/all', async(req, res) => {
    try {
    const order_all = await // all wines
    res.send(order_all)
    } catch(err) {
    res.status(500).send(err)
    }
})


router.get('/order/:id', async(req, res) => {
    try {
    const {id} = req.param
    const order = await 
    res.send(order)
    } catch(err) {
    res.status(500).send(err)
    }

})

router.post('/order/add', async (req, res) => {
  try {
    // add validation for the req.body to prevent error
    // you could use joi for that
    const {
        id,
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
        gocellar_buyer_id,
    } = req.body

    const receive_time = new Date(receive_time)
    const confirmed_time = new Date(confirmed_time)
    const shipping_time = new Date(shipping_time)
    const complete_time = new Date(complete_time)
    const update_time = new Date(update_time)
    
    const order = new Order({
        receive_time : receive_time,
        confirmed_time : confirmed_time,
        shipping_time : shipping_time,
        complete_time : complete_time,
        invoce_title : invoice_title,
        ship_no : ship_no,
        payment : payment,
        status : status,
        update_time : update_time,
        gocellar_supplier_userId : gocellar_supplier-userID,
        buyer_ship_info_id : buyer_ship_info_id,
        supplier_id : supplier_id,
        paymentId : paymentId,
        gocellar_buyer_id : gocellar_buyer_id
    })
    
    const newOrder = await order.save()
    res.send(newOrder);
    }catch(err) {
      res.status(500).send(err.message)
    }
})


router.put('/order/allupdate/:id', async (req, res,next) => {

  try {
    const {id} = req.params
    const order = {
        receive_time : req.body.receive_time,
        confirmed_time : req.body.confirmed_time,
        shipping_time : req.body.shipping_time,
        complete_time : req.body.complete_time,
        invoce_title : req.body.invoice_title,
        ship_no : req.body.ship_no,
        payment : req.body.payment,
        status : req.body.status,
        update_time : req.body.update_time,
        gocellar_supplier_userId : req.body.gocellar_supplier-userID,
        buyer_ship_info_id : req.body.buyer_ship_info_id,
        supplier_id : req.body.supplier_id,
        paymentId : req.body.paymentId,
        gocellar_buyer_id : req.body.gocellar_buyer_id
    }

    await User
      console.log("update order")
    res.send(order)
  }catch(err) {
        res.send(500).send(err)
      }
})



router.delete('/order/all', async (req, res) => {
  try {
    await Order
    res.send('all orders removed')
  } catch(err) {
    res.status(500).send(err.message)
  }
})

router.delete('/:id' , async(req, res) => {
  try {
  const { id } = req.params
  let order = await Order
  res.send({message : "order deleted successful"})
  } catch(err) {
    res.status(500).send(err) 
  }
})



module.exports= router;