const express = require('express');
const router = express.Router(); // create a router

router.get('/vineyard/all', async (req, res) => { // 
  try {
    var  sql = 'SELECT * FROM gocellar.vineyard';
    const vineyard = connection.query(sql, function (err, result) {
      if(err){
        console.log('[SELECT ERROR] ： ',err.message);
        return;
      }
    
    vineyard = result[0]
    console.log(Object.values(vineyard))
    console.log (vineyard.id)
     
    // JSON.stringify(JSON.parse(results))
    //  const str=JSON.stringify(result)
    //  console.log(str)
    //  const json =  JSON.parse(str)
    //  console.log(json)
    //  console.log(json[0].id)
});
    
    res.send(vineyard)

    // res.send('helloooo')
  } catch(err) {
    res.status(500).send(err)
    }
})

// router.get('/vineyard/:id', async(req, res) => {
//   try {
//   const {id} = req.param
//   const vineyard = await 
//   res.send(vineyard)
//   } catch(err) {
//   res.status(500).send(err)
//   }
// })

// router.get('/vineyard/title', async(req, res) => {
//   try {
//   const {id} = req.param
//   const vineyard = await  // search by title
//   res.send(vineyard)
//   } catch(err) {
//   res.status(500).send(err)
//   }
// })

// router.get('/vineyard/companyName', async(req, res) => {
//   try {
//   const {id} = req.param
//   const vineyard = await  // search by company name
//   res.send(vineyard)
//   } catch(err) {
//   res.status(500).send(err)
//   }
// })

// router.get('/vineyard/wineryState', async(req, res) => {
//   try {
//   const {id} = req.param
//   const vineyard = await  // search by winery state
//   res.send(vineyard)
//   } catch(err) {
//   res.status(500).send(err)
//   }
// })

// router.post('/vineyard/add', async(req, res) => {
//   try {
//     const {
//       company_type,
//       title,
//       established_time,
//       companyName,
//       wineryAddress,
//       wineryAddressLine_1,
//       wineryAddressLine_2,
//       wineryCity,
//       wineryState,
//       wineryPostCode,
//       wineryCountry,
//       cellarDoorSalesRange,
//       wineryCellarDoororVineyard,
//       cellarDoorHours,
//       cellarDoorAddress,
//       cellarDoorAddressLine_1,
//       cellarDoorAddressLine_2,
//       cellarDoorCity,
//       cellarDoorState,
//       cellarDoorPostcode,
//       cellarDoorCountry,
//       cellarDoorTelephone,
//       cellarDoorFax,
//       cellarDoorEmail,
//       telephone,
//       fax,
//       website,
//       facebook,
//       twitter} = req.body

//       const established_time = new Date(established_time)

//       const vineyard = new Vineyard({
//       company_type : company_type,
//       title : title,
//       established_time : established_time,
//       companyName : companyName,
//       wineryAddress : wineryAddress,
//       wineryAddressLine_1 : wineryAddressLine_1,
//       wineryAddressLine_2 : wineryAddressLine_2,
//       wineryCity : wineryCity,
//       wineryState : wineryState,
//       wineryPostCode : wineryPostCode,
//       wineryCountry : wineryCountry,
//       cellarDoorSalesRange : cellarDoorSalesRange,
//       wineryCellarDoororVineyard : wineryCellarDoororVineyard,
//       cellarDoorHours : cellarDoorHours,
//       cellarDoorAddress : cellarDoorAddress,
//       cellarDoorAddressLine_1 : cellarDoorAddressLine_1,
//       cellarDoorAddressLine_2 : cellarDoorAddressLine_2,
//       cellarDoorCity : cellarDoorCity,
//       cellarDoorState : cellarDoorState,
//       cellarDoorPostcode : cellarDoorPostcode,
//       cellarDoorCountry : cellarDoorCountry,
//       cellarDoorTelephone : cellarDoorTelephone,
//       cellarDoorFax : cellarDoorFax,
//       cellarDoorEmail : cellarDoorEmail,
//       telephone : telephone,
//       fax : fax,
//       website : website,
//       facebook : facebook,
//       twitter : twitter
//       })
//       const newVineyard = vineyard.save()
//       res.send(newVineyard)
//   }catch(err){
//     res.status(500).send(err)
//   }
// })

// router.put('/vineyard/allupdate/:id', async (req, res,next) => {

//   try {
//     const {id} = req.params
//     const order = {
//         receive_time : req.body.receive_time,
//         confirmed_time : req.body.confirmed_time,
//         shipping_time : req.body.shipping_time,
//         complete_time : req.body.complete_time,
//         invoce_title : req.body.invoice_title,
//         ship_no : req.body.ship_no,
//         payment : req.body.payment,
//         status : req.body.status,
//         update_time : req.body.update_time,
//         gocellar_supplier_userId : req.body.gocellar_supplier-userID,
//         buyer_ship_info_id : req.body.buyer_ship_info_id,
//         supplier_id : req.body.supplier_id,
//         paymentId : req.body.paymentId,
//         gocellar_buyer_id : req.body.gocellar_buyer_id
//     }

//     await User
//       console.log("update order")
//     res.send(order)
//   }catch(err) {
//         res.send(500).send(err)
//       }
// })

// router.delete('/vineyard/all', async (req, res) => {
//   try {
//     await 
//     res.send('all vineyards removed')
//   } catch(err) {
//     res.status(500).send(err.message)
//   }
// })

// router.delete('/vineyard/:id' , async(req, res) => {
//   try {
//   const { id } = req.params
//   let vineyard = await 
//   res.send({message : "vineyard deleted successful"})
//   } catch(err) {
//     res.status(500).send(err) 
//   }
// })


module.exports = router
