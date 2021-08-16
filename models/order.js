const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = require('./serviceSchema');


const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  services: [serviceSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function () {
  // 'this' is bound to the order doc
  return this.services.reduce((total, service) => total + service.price, 0);
});

orderSchema.virtual('orderId').get(function () {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function (userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
}

orderSchema.methods.addServiceToCart = async function (serviceId) {
  const cart = this;
  const service = await mongoose.model('Service').findById(serviceId);
  cart.services.push(service);
  return cart.save();
};


module.exports = mongoose.model('Order', orderSchema);