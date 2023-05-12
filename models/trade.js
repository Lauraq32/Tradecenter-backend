const { Schema, model } = require('mongoose');
const TradeSchema = Schema({
    account: {
        type: String,
    },
    size: {
        type: Number,
    },
    ticker: {
        type: String,
    },
    timestamp: {
        type: Date,
    },
    price: {
        type: Number,
    },
    status: {
        type: String,
    },
    stop: {
        type: Number,
    },
    profit: {
        type: Number,
    }
});

module.exports = model('Trade', TradeSchema);