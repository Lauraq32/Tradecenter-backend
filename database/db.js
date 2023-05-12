const mongoose = require("mongoose");
const { mongoURI } = require("../config");

const Db = async () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("Database connected"))
    .catch((e) => console.log(e));
};

module.exports = {
  DataBase: Db,
};
