const mongoose = require('mongoose');
const QuestionSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  label: { type: String, required: true },
  type: { type: String, required: true },
  options: [String],
  category: String,
  conditional: {
    field: String,
    value: mongoose.Schema.Types.Mixed
  }
});
module.exports = mongoose.model('Question', QuestionSchema);
