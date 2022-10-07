const express = require('express');
const { addTrade, getAll } = require('../Controller/tradeController');
const router = express.Router();

router.post('/add',addTrade);
router.get("/all",getAll);


module.exports = router ;