const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/').post((req, res) => {
    const username = req.body.username
    const newUser = new User({username})

    newUser.save()
        .then(() => res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then((user) => res.json(user))
        .catch((err) => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    User.deleteMany( { "_id": req.params.id } )
        .then(() => res.json({"message":"Successfully deleted object."}))
        .catch((err) => res.status(400).json('Error: ' + err))
})


module.exports = router