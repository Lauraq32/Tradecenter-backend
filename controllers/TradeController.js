const Trade = require("../models/trade");

const TradeController = {};

TradeController.getTrades = async (req, res) => {
  try {
    const list = await Trade.find({ account: "11307480" });

    return res.status(200).json(list);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

TradeController.getStatusOfTradeByDay = async (_, res) => {
  try {
    const match = {
      account: "11307480",
      profit: { $gte: 0 },
    };

    const group = {
      _id: { $dateToString: { date: { $toDate: "$_id" }, format: "%Y-%m-%d" } },
      ip: { $addToSet: "$ip" },
      total: { $sum: "$profit" },
    };

    const project = {
      account: "11307480",
      trades: "$trades",
      total: "$total",
      date: "$_id",
    };
    const pipeline = [
      { $match: match },
      { $group: group },
      { $project: project },
    ];
    

    const earnings = await Trade.aggregate(pipeline);

    return res.status(200).json({
      earnings,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

module.exports = TradeController;
