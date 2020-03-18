const express = require('express');
const router = express.Router()


Router.get('/', async (req, res) => {
    try
        const orders = await models.Order.findAll({
            include: [
                {}
            ]
        })

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

