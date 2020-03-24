const express = require('express');
const router = express.Router()
const models = require('../mySQL_demo/models')



// router.get('/', async (req, res) => {
//     try{
//         const vineyard = await models.Vineyard.findAll({
//            limit: 10
//         });
//         res.send(vineyard)
//     }
//     catch(err){
//         return res.status(500).send(err)
//     }
// })
router.get('/', function(req, res, next) {
    models.vineyard.findAll({ limit: 10 }).then(function(rows) {
       res.render('user', { rows: rows });
   });
});

router.post('/', async (req, res) => {
    try {
        const order = await models.Vineyard.Create(req.body);
        return res.send(post)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

module.exports = router;