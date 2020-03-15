const { Schema, model } = require('mongoose');

const animalSchema = new Schema(
    {
        name: { type: String, required: true},
        date: { type: Date, default: Date.now()},
    }, {
        timestamps: true
    });

module.exports = model('Animal', animalSchema);