// main controller code which implements CRUD functionality

import Exercise from '../model/Exercise.mjs'
import { updateHelper, generateFilter } from './helper.mjs'

const create = async (req, res, next) => {
    const newExercise = new Exercise(req.body)
    const resp = await newExercise.save()
    res.status(200).send(resp)
}

const retrieve = async (req, res, next) => {
    const filter = generateFilter(req.query)
    const query = Exercise.find()

    if (filter.length > 0) {
        query.and(filter)
    }

    const result = await query.exec()
    res.send(result)
}

const update = async (req, res, next) => {
    const { filter, update } = updateHelper(req.query)
    const result = await Exercise.findOneAndUpdate(filter, update)

    if (result !== null) {
        res.send({ "modifiedCount": 1 })
    } else {
        res.send({ "Error": "Not found" })
    }
}


const remove = async (req, res, next) => {
    const result = await Exercise.deleteMany(req.query)
    res.send(result)
}

export { create as createExercise, update as updateExercise, retrieve as retrieveExercise, remove as deleteExercise }