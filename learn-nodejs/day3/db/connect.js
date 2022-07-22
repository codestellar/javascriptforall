const mongoose = require("mongoose");

const connectDB = async (uri) => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
