const Schema = require('mongoose').Schema;

const serviceSchema = new Schema({
  name: { type: String, required: true },
  icon: { type: String},
  price: { type: Number, required: true, default: 0 }
}, {
  timestamps: true
});

module.exports = serviceSchema;