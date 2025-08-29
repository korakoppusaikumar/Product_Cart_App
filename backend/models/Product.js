const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  questions: [{
    key: String,
    label: String,
    value: mongoose.Schema.Types.Mixed
  }],
  createdAt: { type: Date, default: Date.now },
  company: String
});
module.exports = mongoose.model('Product', ProductSchema);
