const express = require('express');
let CreateUser = require('../BL/CreateUser');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        let body = req.body;
        let name = body.name;
        let password = body.password;
        let createUser = new CreateUser();
        let result = await createUser.Execute(name, password);
        res.status(200).send(result);
    }
    catch (err) {
        if (err.name !== 'RequestError') {
            res.status(400).send(err.message);
        }
        else {
            res.status(500).send(err.message);
        }
    }
});

router.delete('/:name', (req, res) => {

});

router.put('/:name', (req, res) => {

});

module.exports = router;