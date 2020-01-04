const express = require('express');
const router = express.Router();

const invoicesController = require('../controllers/invoices');

router.post('/', invoicesController.create);
router.get('/list', invoicesController.list);
router.get('/:invoiceNumber', invoicesController.retrieve);
router.delete('/:invoiceNumber', invoicesController.delete);

module.exports = router;
