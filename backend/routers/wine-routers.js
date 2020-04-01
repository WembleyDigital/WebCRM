const express = require('express');
const router = express.Router();

router.get('/wine/all', async(req, res) => {
    try {
    const wine_all = await// all wines
    res.send(wine_all)
    } catch(err) {
    res.status(500).send(err)
    }

})



router.get('/wine/:id', async(req, res) => {
    try {
    const wine_all = await // search by id
    res.send(wine_all)
    } catch(err) {
    res.status(500).send(err)
    }

})


router.get('/wine/state', async(req, res) => {
    try {
    const wineByState = await// search by state
    res.send(wineByState)
    } catch(err) {
    res.status(500).send(err)
    }

})


router.get('/wine/type', async(req, res) => {
    try {
    const wineByType = await// search by type
    res.send(wineByType)
    } catch(err) {
    res.status(500).send(err)
    }

})



router.post('/wine/add',async(req, res) => {
    try{
        const { 
            id,
                code,
                saled_quantity,
                create_time,
                description,
                volume,
                productName,
                original_price,
                sale_price,
                package,
                status,
                stock,
                sub_title,
                video_url,
                weight,
                vage,
                state,
                sight_score,
                nose_score,
                palate_score,
                product_code,
                threshold,
                alchohols,
                standard_drink,
                gocellar_food_pairing_id,
                winemaker,
                brand_id,
                category_id,
                GrapeType_id,
                creator_user_id,
                updator_user_id } = req.body

                const create_time = new Date(create_time)
                const newWine = new Wine({
                    code: code,
                    saled_quantity: saled_quantity,
                    create_time: create_time,
                    description: description,
                    volume: volume,
                    productName: productName,
                    original_price: original_price,
                    sale_price: sale_price,
                    package: package,
                    status: status,
                    stock: stock,
                    sub_title: sub_title,
                    video_url: video_url,
                    weight: weight,
                    vage: vage,
                    state: state,
                    sight_score: sight_score,
                    nose_score: nose_score,
                    palate_score: palate_score,
                    product_code: product_code,
                    threshold: threshold,
                    alchohols: alchohols,
                    standard_drink: standard_drink,
                    gocellar_food_pairing_id: gocellar_food_pairing_id,
                    winemaker: winemaker,
                    brand_id: brand_id,
                    category_id: category_id,
                    GrapeType_id: GrapeType_id,
                    creator_user_id: creator_user_id,
                    updator_user_id: updator_user_id})
                    
                    const newWine = await wine.save()
                    res.send(newWine);
                }catch(err){
                    res.status(500).send(err.message)
                }

})


router.post('/wine/add',async(req, res) => {
    try{
        const { 
            id,
            code,
            saled_quantity,
            create_time,
            description,
            volume,
            productName,
            original_price,
            sale_price,
            package,
            status,
            stock,
            sub_title,
            video_url,
            weight,
            vage,
            state,
            sight_score,
            nose_score,
            palate_score,
            product_code,
            threshold,
            alchohols,
            standard_drink,
            gocellar_food_pairing_id,
            winemaker,
            brand_id,
            category_id,
            GrapeType_id,
            creator_user_id,
            updator_user_id } = req.body

        const create_time = new Date(create_time)
        const newWine = new Wine({

            code: code,
            saled_quantity: saled_quantity,
            create_time: create_time,
            description: description,
            volume: volume,
            productName: productName,
            original_price: original_price,
            sale_price: sale_price,
            package: package,
            status: status,
            stock: stock,
            sub_title: sub_title,
            video_url: video_url,
            weight: weight,
            vage: vage,
            state: state,
            sight_score: sight_score,
            nose_score: nose_score,
            palate_score: palate_score,
            product_code: product_code,
            threshold: threshold,
            alchohols: alchohols,
            standard_drink: standard_drink,
            gocellar_food_pairing_id: gocellar_food_pairing_id,
            winemaker: winemaker,
            brand_id: brand_id,
            category_id: category_id,
            GrapeType_id: GrapeType_id,
            creator_user_id: creator_user_id,
            updator_user_id: updator_user_id
        })
                
        const newWine = await wine.save()
        res.send(newWine);
        }catch(err){
            res.status(500).send(err.message)
        }

})


router.put('/wine/update/:id',async(req, res) => {
    try{
        const {id} = req.params
        const create_time = new Date(create_time)
        const wine = {

            code: req.body.code,
            saled_quantity: req.body.saled_quantity,
            create_time: req.body.create_time,
            description: req.body.description,
            volume: req.body.volume,
            productName: req.body.productName,
            original_price: req.body.original_price,
            sale_price: req.body.sale_price,
            package: req.body.package,
            status: req.body.status,
            stock: req.body.stock,
            sub_title: req.body.sub_title,
            video_url: req.body.video_url,
            weight: req.body.weight,
            vage: req.body.vage,
            state: req.body.state,
            sight_score: req.body.sight_score,
            nose_score: req.body.nose_score,
            palate_score: req.body.palate_score,
            product_code: req.body.product_code,
            threshold: req.body.threshold,
            alchohols: req.body.alchohols,
            standard_drink: req.body.standard_drink,
            gocellar_food_pairing_id: req.body.gocellar_food_pairing_id,
            winemaker: req.body.winemaker,
            brand_id: req.body.brand_id,
            category_id: req.body.category_id,
            GrapeType_id: req.body.GrapeType_id,
            creator_user_id: req.body.creator_user_id,
            updator_user_id: req.body.updator_user_id
        }
                
        
        res.send(wine);
        }catch(err){
            res.status(500).send(err.message)
        }
})


router.delete('/wine/all', async (req, res) => {
    try {
      await 
      res.send('all wine removed')
    } catch(err) {
      res.status(500).send(err.message)
    }
  })
  
  router.delete('wine/:id' , async(req, res) => {
  try {
    const { id } = req.params
    const wine = await 
    res.send({message : "wine deleted successful"})
    } catch(err) {
      res.status(500).send(err) 
    }
  })
 
  module.exports = router