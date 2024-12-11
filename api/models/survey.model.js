const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surveySchema = new Schema(
  {
    devicesSold: [
    {
      name: String,
      count: Number,
    },
  ],
  createdAt: { type: Date, default: Date.now },
  }
);

module.exports = mongoose.model('Survey', surveySchema);