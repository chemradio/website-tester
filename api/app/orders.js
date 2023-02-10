const express = require('express')
const Order = require('../models/Order')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('user')
        res.send(orders)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const findOrder = await Order.findById(req.params.id)

        if (!findOrder) {
            return res.status(404).send({ message: 'Order not found!' })
        }

        res.send(findOrder)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

router.post('/', auth, async (req, res) => {
    let user = req.user
    try {
        if (!req.body.link) res.status(400).send({message: 'Not found!'})

        const OrderData = {
            status: req.body.status,

            stage: req.body.stage,

            link: req.body.link,

            order_creation_end_timestamp: Date.now(),

            audio_enabled: req.body.audio_enabled,

            quote_enabled: req.body.quote_enabled,

            audio_name: req.body.audio_name,

            quote_text: req.body.quote_text,

            quote_author_text: req.body.quote_author_text,

            user: user._id
        }

        const order = new Order(OrderData)
        await order.save()
        res.send(order)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

module.exports = router
