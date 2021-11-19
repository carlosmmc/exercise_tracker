// main controller code which implements CRUD functionality

import Exercise from '../model/Exercise.mjs'

const create = async (req, res, next) => {
    const newExercise = new Exercise(req.body)
    const resp = await newExercise.save()

    res.setHeader('content-type', 'application/json');
    res.status(201).send(resp)
}

const retrieve = async (req, res, next) => {
    const result = await Exercise.find({})

    res.setHeader('content-type', 'application/json');
    res.status(200).send(result)
}

const update = async (req, res, next) => {
    const { id } = req.params
    const updatedValues = req.body
    const result = await Exercise.findByIdAndUpdate(id, updatedValues, { new: true })

    res.setHeader('content-type', 'application/json');
    res.status(200).send(result)
}


const remove = async (req, res, next) => {
    const { id } = req.params
    const result = await Exercise.findByIdAndDelete(id)

    res.status(204).send(result)
}

export { create as createExercise, update as updateExercise, retrieve as retrieveExercise, remove as deleteExercise }