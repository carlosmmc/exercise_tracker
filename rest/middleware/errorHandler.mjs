// error handler middleware used in the app

const errorHandler = (err, req, res, next) => {
    res.status(500).send(err.message)
}

export { errorHandler }