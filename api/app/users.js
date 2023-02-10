const express = require('express');
const router = express.Router();
const utils = require('../middleware/token');
const User = require('../models/User');

const getLiveCookie = user => {
    const { username } = user
    const maxAge = 730 * 60 * 60
    return { token: utils.getToken(username, maxAge), maxAge }
}

const getLiveSecretCookie = user => {
    const { username } = user
    const maxAge = 5 * 60 * 60
    return { token: utils.getToken(username, maxAge), maxAge }
}

router.post('/', async (req, res) => {
    try {
        const secretToken = getLiveSecretCookie({ email: req.body.email })

        const { email, password, username } = req.body

        const userData = { email, password, username, confirmationCode: secretToken.token }

        const user = new User(userData)

        const { token, maxAge } = getLiveCookie(user)

        res.cookie('jwt', token, {
            httpOnly: false,
            maxAge: maxAge * 1000,
        })

        user.token = token

        await user.save()

        return res.status(201).send(user)
    } catch (e) {
        return res.status(400).send(e)
    }
});

router.post('/sessions', async (req, res) => {
        try {
            if (req.cookies.jwt) {
                const user = await User.findOne({token: req.cookies.jwt})
                console.log(user)
                return res.send(user)
            }
            if (!req.body.email || !req.body.password) {
                return res.status(401).send({message: 'Введенные данные не верны!'})
            }

            const user = await User.findOne({email: req.body.email})

            if (!user) {
                return res.status(401).send({message: 'Введенные данные не верны!'})
            }

            const isMatch = await user.checkPassword(req.body.password)
            if (!isMatch) {
                return res.status(401).send({message: 'Введенные данные не верны!'})
            }

            const {token, maxAge} = getLiveCookie(user)

            res.cookie('jwt', token, {
                httpOnly: false,
                maxAge: maxAge * 1000,
            })

            user.token = token
            await user.save({validateBeforeSave: false})

            return res.send(user)

        } catch (e) {
            return res.status(500).send({ error: e })
        }
});

router.delete('/sessions', async (req, res) => {
    const success = { message: 'Success' }
    const cookie = req.cookies.jwt

    if (!cookie) return res.send(success)

    const user = await User.findOne({ token: cookie })

    if (!user) return res.send(success)

    const { token } = getLiveCookie(user)
    user.token = token

    await user.save({ validateBeforeSave: false })

    return res.send({ success, user })
});

module.exports = router;