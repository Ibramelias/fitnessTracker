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
        },
        duration: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number,
            unique: true,
        },

    }]


});


const Exercise = mongoose.model("exercise", ExerciseSchemas)


module.exports = Exercise;

















