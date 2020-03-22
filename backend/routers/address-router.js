const express = require('express');
const router = express.Router()
const models = require('../mySQL_demo/models')


Router.get('/', async (req, res) => {
    try{
        const address = await models.gocellar_address.findAll({
            include: [
                {}
            ]
        });
        res.send(address)
    }
    catch(err){
        return res.status.send(err)
    }
})


Router.post('/', async (req, res) => {
    try {
        const order = await models.Order.Create(req.body);
        return res.send(post)
    }
    catch (error) {
        return res.status(500).send(error)
    }
})

