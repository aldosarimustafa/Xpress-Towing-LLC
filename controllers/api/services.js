const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Service = require('../../models/service');

module.exports = {
  index
};

async function index(req, res) {
    const services = await Service.find({});
    res.json(services);
}