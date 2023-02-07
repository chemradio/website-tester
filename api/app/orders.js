const express = require('express')
const Order = require('../models/Order')
const auth = require('../middleware/auth')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const orders = await Order.find()
        res.send(orders)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const findCategory = await Category.findById(req.params.id)

        if (!findCategory) {
            return res.status(404).send({ message: 'Category not found!' })
        }

        res.send(findCategory)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

router.post('/', auth, async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title) {
            return res.status(400).send({
                message: 'Введенные данные не верны!',
            })
        }

        const categoryData = {
            title,
            description,
        }

        const category = new Category(categoryData)
        await category.save()
        res.send(category)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

router.put('/:id', auth, async (req, res) => {
    try {
        const { title, description } = req.body

        if (!title) {
            return res.status(400).send({ message: 'Введенные данные не верны!' })
        }

        const categoryData = {
            title,
            description,
        }

        const category = await Category.findById(req.params.id)

        if (!category) {
            return res.status(404).send({ message: 'Category not found!' })
        }

        const updateCategory = await Category.findByIdAndUpdate(req.params.id, categoryData, { new: true })
        res.send(updateCategory)
    } catch (e) {
        res.status(500).send({ error: e.message })
    }
})

module.exports = router
