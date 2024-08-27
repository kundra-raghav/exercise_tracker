const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
app = express();

app.use(express.json());
router.route('/').get((req, res)=>{
    User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
    .then(()=> res.status(201).json('User added!'))
    .catch(error => res.status(400).json(`Error: ${error}`));
});

module.exports = router;