const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercises = new Schema({
    type: {
        type: Option,


    },

    name: {
        type: String,
        unique: true,
        required: true
    },

    distance: {
        type: Number,
        unique: true,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },


    weight: {
        type: Number,
        required:true
    },

    sets: {
        type: Number,
        required: true
    },

    reps: {
        type: Number,
        required: true
    }







})