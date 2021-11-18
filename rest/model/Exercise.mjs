// code for user model

import mongoose from 'mongoose'

const exerciseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
})

const Exercise = mongoose.model("Exercise", exerciseSchema)

export { Exercise as default }