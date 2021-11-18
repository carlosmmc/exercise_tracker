// main controller code which implements CRUD functionality - imports some functions
// from helper.mjs in same folder

import User from '../model/User.mjs'
import { updateHelper, generateFilter } from './helper.mjs'

const create = async (req, res, next) => {
    const newMovie = new User(req.query)
    const val = await newMovie.save()
    res.send(val)
}

const update = async (req, res, next) => {
    const { filter, update } = updateHelper(req.query)
    const result = await User.findOneAndUpdate(filter, update)

    if (result !== null) {
        res.send({ "modifiedCount": 1 })
    } else {
        res.send({ "Error": "Not found" })
    }
}

const retrieve = async (req, res, next) => {
    const filter = generateFilter(req.query)
    const query = User.find()

    if (filter.length > 0) {
        query.and(filter)
    }

    const result = await query.exec()
    res.send(result)
}

const remove = async (req, res, next) => {
    const result = await User.deleteMany(req.query)
    res.send(result)
}



export { create as createUser, update as updateUser, retrieve as retrieveUser, remove as deleteUser }