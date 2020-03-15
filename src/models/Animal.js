const { Schema, model } = require('mongoose');

const animalSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
}, {
    timestamps: true
});
module.exports = model('Animal', animalSchema);