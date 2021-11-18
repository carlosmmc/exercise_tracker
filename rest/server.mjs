'use strict';

// import modules
import express from 'express'
import mongoose from 'mongoose'
import { createExercise, deleteExercise, retrieveExercise, updateExercise } from './controller/controller.mjs'
import { errorHandler } from './middleware/errorHandler.mjs';
import { errorCatcher } from './utils/errorCatcher.mjs';

// set intiial variables
const PORT = 3000;
const db = mongoose.connection
const app = express()

// connect to db
mongoose.connect("mongodb://localhost:27017/exercises_db")

// CRUD functionality
app.get('/create', errorCatcher(createExercise))
app.get('/retrieve', errorCatcher(retrieveExercise))
app.get('/update/:id', errorCatcher(updateExercise))
app.get('/delete/:id', errorCatcher(deleteExercise))

// error handling middleware
app.use(errorHandler)

// listen on server
app.listen(PORT)