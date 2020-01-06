const express = require('express');
const router = express.Router();

const taxesController = require('../controllers/taxes');

router.get('/', taxesController.get);

module.exports = router;
