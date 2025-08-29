const mongoose = require('mongoose');
const ReportSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  company: String,
  createdAt: { type: Date, default: Date.now },
  pdfPath: String,
  summary: String
});
module.exports = mongoose.model('Report', ReportSchema);
