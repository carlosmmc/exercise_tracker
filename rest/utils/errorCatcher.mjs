const errorCatcher = (f) => {
    const wrappedFunc = (req, res, next) => f(req, res).catch(next)
    return wrappedFunc
}

export { errorCatcher }