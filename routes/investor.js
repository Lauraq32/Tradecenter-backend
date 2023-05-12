const { Router } = require('express');
const {validations} = require("../middlewares/validations");
const InvestorController = require("../controllers/InvestorController");
const {jwtValidations} = require("../middlewares/jwt-validations");

const router = Router();

router.post("/investor/new", [
    jwtValidations,
    validations
], InvestorController.create);  


module.exports = router;