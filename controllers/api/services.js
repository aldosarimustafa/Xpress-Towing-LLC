const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Service = require('../../models/service');
const Order = require('../../models/order');

module.exports = {
  index,
  show,
  addServiceToCart,
  getCart
};

async function index(req, res) {
    const services = await Service.find({});
    res.json(services);
}

async function show(req, res) {
    const service = await Service.findById(req.params.id);
    res.json(service);
}
async function addServiceToCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    await cart.addServiceToCart(req.params.serviceId);
    res.json(cart);
}

async function getCart(req, res) {
    const cart = await Order.getCart(req.user._id);
    res.json(cart);
}