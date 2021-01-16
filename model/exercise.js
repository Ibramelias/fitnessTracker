const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchemas = new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    exercise: [{
        type: {
            type: String,
            require: true
        },
        name: {
            type: String,
            required: true
        },
        weight: {
            type: Number,
            default: 0
        },
        duration: {
            type: Number,
            default: 0
        },
        sets: {
            type: Number,
            default: 0
        },
        reps: {
            type: Number,
            default: 0
        },
        distance: {
            type: Number,
            unique: true,
            default: 0
        },

    }]


});


const Exercise = mongoose.model("exercise", ExerciseSchemas)


module.exports = Exercise;

















