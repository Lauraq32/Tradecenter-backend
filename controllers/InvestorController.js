const Investor = require('../models/investor');

const InvestorController = {};

InvestorController.create = async (req, res) => {
  const investors = new Investor({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const result = await investors.save();
    const investorObj = result.toObject();

    return res.status(201).json({
      ...investorObj
    });
  } catch (err) {
    console.log(`an error occurred ${err}`);
    return res.status(500);
  }
};

module.exports = InvestorController;

