const { Schema, model } = require("mongoose");
const AccountSchema = Schema({
  accountId: {
    type: String,
  },
  size: {
    type: Number,
  },
  name: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  accountValue: {
    type: Number,
  },
  lastSize: {
    type: Number,
  },
  buyingPower: {
    type: Number,
  },
  accountValueStartOfDay: {
    type: Number,
  },
  lastStartOfTheDay: {
    type: Date,
  },
  dayPercent: {
    type: Number,
  },
});

module.exports = model("Account", AccountSchema);
