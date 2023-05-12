const { Router } = require('express');
const {validations} = require("../middlewares/validations");
const AccountController = require("../controllers/AccountController");
const {jwtValidations} = require("../middlewares/jwt-validations");

const router = Router();

router.get("/value", [
    jwtValidations,
    validations
], AccountController.getAccountValue);  


module.exports = router;