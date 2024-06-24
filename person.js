
const mongoose = require('mongoose');

// Defining person schema 
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
    },
    favoriteFoods: {
        type: [String],
        default: []
    },
});

// Creating person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;