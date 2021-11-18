// stats logging middleware

const middlewareStats = function () {
    let overallCount = 0
    let noParamsCount = 0

    return function (updateNoParams) {
        ++overallCount
        if (updateNoParams) { ++noParamsCount }

        const paramsCount = overallCount - noParamsCount
        return [overallCount, noParamsCount, paramsCount]
    }
}

const updateStats = middlewareStats()

const statsLogger = function (req, res, next) {
    if (req.originalUrl.includes('/retrieve')) {
        let noParams = Object.keys(req.query).length === 0
        const [overallCount, noParamsCount, paramsCount] = updateStats(noParams)

        if (overallCount % 10 == 0) {
            console.log(`Total retrieve requests: ${overallCount}`)
            console.log(`Retrieve requests with 0 query parameters: : ${noParamsCount}`)
            console.log(`Retrieve requests with 1 or more query parameters: ${paramsCount}`)
        }
    }

    next()
}

export { statsLogger as default }