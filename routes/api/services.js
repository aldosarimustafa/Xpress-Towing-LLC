const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', servicesCtrl.index);

module.exports = router;