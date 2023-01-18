const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    destination: {
        type: String,
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
})

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "South West", "United", "Delta"],
},
airport: {
    type: String,
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"
},
flightNo: {
    type: Number,
    min: [10, ""],
    max: [9999, ""],
    required: true
},
departs: {
    type: Date,
    default: function() {
        const newDate = new Date()
        newDate.setFullYear(newDate.getFullYear() + 1)
        return newDate
    }
},
arrivals: [destinationSchema]
}, {
    timestamps: true
  });

  module.exports = mongoose.model('Flight', flightSchema)