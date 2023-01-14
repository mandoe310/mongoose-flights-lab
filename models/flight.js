const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "South West", "United", "Delta"],
},
airport: {
    type: String,
    enum: ["LAX", "DFW", "JFK", "LGB"],
},
flightNo: {
    type: Number,
    min: [10, ""],
    max: [9999, ""],
},
departs: {
    type: Date,
}}, {
    timestamps: true
  });

  module.exports = mongoose.model('Flight', flightSchema)