let express = require('express')
let db= require('../models') 

let Workout = db.WorkOuts 

let router =express.Router()

router.get('/WorkOuts', function(req, res, next){
    Workout.findALL().then(WorkOuts => {
        return res.json(WorkOuts)
    })
})

router.post('/WorkOuts', function (req, res, next){
    Workout.create(req.body).then( (data) => {
        return res.status(201).send('ok')
    })
})
module.exports = router 