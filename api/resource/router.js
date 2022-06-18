// build your `/api/resources` router here
const express = require('express');
const helpers = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.find()
    .then(resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})


module.exports = router;
