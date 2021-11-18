'use strict';

// import modules
import express from 'express'
import mongoose from 'mongoose'
import statsLogger from './middleware/statsLogger.mjs'
import { createUser, deleteUser, retrieveUser, updateUser } from './controller/controller.mjs'
import { errorHandler } from './middleware/errorHandler.mjs';
import { errorCatcher } from './utils/errorCatcher.mjs';

// set intiial variables
const PORT = 3000;
const db = mongoose.connection
const app = express()

// connect to db
mongoose.connect("mongodb://localhost:27017/users_db")

// middleware
app.use(statsLogger)

// CRUD functionality
app.get('/create', errorCatcher(createUser))
app.get('/retrieve', errorCatcher(retrieveUser))
app.get('/update', errorCatcher(updateUser))
app.get('/delete', errorCatcher(deleteUser))

// error handling middleware
app.use(errorHandler)

// listen on server
app.listen(PORT)