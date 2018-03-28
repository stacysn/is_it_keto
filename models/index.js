const mongoose = require("mongoose");
mongoose.connect("mongodb://<blueCheese5>:<bacon5>@ds215019.mlab.com:15019/is-it-keto");

module.exports.User = require("./user.js");