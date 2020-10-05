const express = require('express');
const GetUserByName = require('../BL/GetUserByName');

const router = express.Router();

router.get('/', (req, res) => {
    
});

router.get('/:name', async (req, res) => {
    try {
        let name = req.params.name;
        let getUserByName = new GetUserByName();
        let result = await getUserByName.Execute(name);
        res.status(200).send(result);
    }
    catch (err) {
        if (err.name !== 'RequestError') {
            res.status(404).send(err.message);
        }
        else {
            res.status(500).send(err.message);
        }
    }
});

router.get('/:groupId', (req, res) => {
    
});

module.exports = router;