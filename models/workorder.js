const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = require('./serviceSchema');

const workOrderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    service: serviceSchema,
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

module.exports = mongoose.model('WorkOrder', workOrderSchema);
