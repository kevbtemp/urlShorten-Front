const express = require('express');
const router = express.Router();

const Url = require('../models/Url')

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code })
        if (url) {
            return res.redirect(url.longUrl)
        } else {
            return res.status(404).json('No URL found')
        }
    } catch (err) {

    }
})

module.exports = router;