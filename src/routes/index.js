const express = require('express');
const router = express.Router();
const invoices = require('./invoice');
const weather = require('./weather');
const taxes = require('./taxes');

router.route('/').get((req, res) => {
    res.send({ hi: 'there' });
});

router.use('/taxes', taxes);
router.use('/invoices', invoices);
router.use('/weather', weather);

module.exports = router;
