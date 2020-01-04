const express = require('express');
const router = express.Router();
const invoices = require('./invoice');
const weather = require('./weather');

router.route('/').get((req, res) => {
    res.send({ hi: 'there' });
});

router.use('/invoices', invoices);
router.use('/weather', weather);

module.exports = router;
