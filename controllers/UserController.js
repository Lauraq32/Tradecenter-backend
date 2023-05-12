const User = require('../models/user');
const crypto = require("crypto");
const {SECRETORPRIVATEKEY} = require('../config');
const {getJWT} = require("../helpers/generate-jwt");

const UserController = {};

UserController.create = async (req, res) => {
  const sha256Hasher = crypto.createHmac("sha256", SECRETORPRIVATEKEY);
  const hash = sha256Hasher.update(req.body.password).digest("hex");

  const users = new User({
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: hash,
    rol: req.body.rol,
    invested: req.body.invested,
    percent: req.body.percent,
  });

  try {
    const result = await users.save();
    const userObj = result.toObject();
    const token = await getJWT(userObj._id);

    delete userObj.password;

    return res.status(201).json({
      ...userObj,
      token
    });
  } catch (err) {
    console.log(`an error occurred ${err}`);
    return res.status(500);
  }
};

UserController.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const sha256Hasher = crypto.createHmac("sha256", SECRETORPRIVATEKEY);
    const hash = sha256Hasher.update(password).digest("hex");

    const user = await User.findOne({ email, password: hash });

    if (!user) {
      return res.status(401).json({
        msg: "Invalid credentials",
      });
    }
    const token = await getJWT(user._id);
    const userObj = user.toObject();

    delete userObj.password;

    res.json({
      ...userObj,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "talk to admin",
    });
  }
};

module.exports = UserController;

