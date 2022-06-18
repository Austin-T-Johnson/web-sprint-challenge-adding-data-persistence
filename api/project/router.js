// build your `/api/projects` router here
const express = require('express');
const helpers = require('./model');
const router = express.Router();

router.get('/', (req, res, next) => {
    helpers.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req,res,next) => {
    helpers.insert(req.body)
    .then(newProject => {
        res.status(201).json(newProject[0]);
    })
    .catch(next)
})

module.exports = router;
