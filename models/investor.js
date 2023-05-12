const { Schema, model } = require('mongoose');
const InvestorSchema = Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = model('Investor', InvestorSchema);