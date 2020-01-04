const express = require('express');
const router = express.Router();

const weatherController = require('../controllers/weather');

router.get('/current', weatherController.current);
router.get('/forecast', weatherController.forecast);

module.exports = router;
