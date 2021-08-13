const mongoose = require('mongoose');
require('./category');

const itemSchema = require('./serviceSchema');

module.exports = mongoose.model('Service', serviceSchema);