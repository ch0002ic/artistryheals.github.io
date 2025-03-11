const express = require('express');
const router = express.Router();
const user = require('../model/user');

router.get('/', async (req, res) => {

    try {

        const { name } = req.body;
        const userAccount = await user.getUserAccount(name);

        if (userAccount.length <= 0) {
            return res.status(400).json({ "error": "Account does not exist!" });
        }

        res.status(200).json(userAccount[0]);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }

});

module.exports = router;