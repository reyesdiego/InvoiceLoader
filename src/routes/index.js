const express = require('express');
const router = express.Router();
const invoices = require('./invoice');

router.route('/').get((req, res) => {
    res.send({ hi: 'there' });
});

router.use('/invoices', invoices);

module.exports = router;
