const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = require('./serviceSchema');

const lineServiceSchema = new Schema({
  qty: { type: Number, default: 1 },
  service: serviceSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineServiceSchema.virtual('extPrice').get(function() {
  return this.qty * this.service.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  lineServices: [lineServiceSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  return this.lineServices.reduce((total, service) => total + service.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  return this.lineServices.reduce((total, service) => total + service.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
}

orderSchema.methods.addServiceToCart = async function(serviceId) {
  const cart = this;
  const lineService = cart.lineServices.find(lineService => lineService.service._id.equals(serviceId));
  if (lineService) {
    lineService.qty += 1;
  } else {
    const service = await mongoose.model('Service').findById(serviceId);
    cart.lineServices.push({ service });
  }
  return cart.save();
};

orderSchema.methods.setServiceQty = function(serviceId, newQty) {
  const cart = this;
  const lineService = cart.lineServices.find(lineService => lineService.service._id.equals(serviceId));
  if (lineService && newQty <= 0) {
    lineService.remove();
  } else if (lineService) {
    lineService.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('WorkOrder', orderSchema);
