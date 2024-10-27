const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
    rule: String,                    // Raw rule string
    ast: mongoose.Schema.Types.Mixed  // JSON structure for AST
});

module.exports = mongoose.model('Rule', RuleSchema);
