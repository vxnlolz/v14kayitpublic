const mongoose = require("mongoose");

const kayitlar = mongoose.Schema({
  _id: String,
  kayitlar: Array
});

module.exports = mongoose.model("kayitlar", kayitlar);