const Account = require('../models/account');
const crypto = require("crypto");
const {SECRETORPRIVATEKEY} = require('../config');
const {getJWT} = require("../helpers/generate-jwt");

const AccountController = {};

AccountController.getAccountValue = async (_, res) => {
    try {
        const value = await Account.find({ accountId: "11307480" });
    
        return res.status(200).json(value);
      } catch (error) {
        console.log(error);
        return res.status(500);
      }
};

module.exports = AccountController;

