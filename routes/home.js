const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const URLs = [
        {
            origin: 'wwww.google.com',
            shortURL: 'asdasfasd'
        },
        {
            origin: 'wwww.google.com/1',
            shortURL: 'asdasfasd'
        },
        {
            origin: 'wwww.google.com/2',
            shortURL: 'asdasfasd'
        },
        {
            origin: 'wwww.google.com/3',
            shortURL: 'asdasfasd'
        }
    ]

    res.render('home', { URLs })
})

module.exports = router