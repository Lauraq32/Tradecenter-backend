const { Router } = require('express');
const { check } = require('express-validator');
const {validations} = require("../middlewares/validations");
const UserController = require("../controllers/UserController");
const {emailValidation} = require("../helpers/dbValidators");

const router = Router();

router.post("/signup",[
  check('name', 'name is required').not().isEmpty(),
  check('lastname', 'lastname is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
  check('password', 'password is required').not().isEmpty(),
  check('password', 'The password needs to be least 6 characters long').isLength({ min: 6 }),
  check('email').custom(emailValidation),
  validations
], UserController.create);

router.post('/login', [
  check('email', 'need a email to proceed').isEmail(),
  check('password', 'password is required').not().isEmpty(),
  validations
], UserController.login);


module.exports = router;
