const express = require('express');
const router = express.Router();
const servicesCtrl = require('../../controllers/api/services');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', servicesCtrl.index);
router.get('/cart', servicesCtrl.getCart);
router.get('/:id', servicesCtrl.show);
router.put('/add/:serviceId', servicesCtrl.addServiceToCart);

module.exports = router;