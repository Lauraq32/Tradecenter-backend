const { Router } = require('express');
const {validations} = require("../middlewares/validations");
const TradeController = require("../controllers/TradeController");
const {jwtValidations} = require("../middlewares/jwt-validations");

const router = Router();

router.get("/", [
    jwtValidations,
    validations
], TradeController.getTrades);  

router.get("/earnings", [
    jwtValidations,
    validations
], TradeController.getStatusOfTradeByDay);  

module.exports = router;