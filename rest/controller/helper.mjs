// helper code that is used to implement CRUD functionality

const updateHelper = (query) => {
    const filter = {}
    const update = {}

    for (const k in query) {
        if (k != '_id') {
            update[k] = query[k]
        } else if (k == '_id') {
            filter[k] = query[k]
        }
    }

    return { filter, update }
}

const generateFilter = function (query) {
    const filters = []

    for (const k in query) {
        const f = {}
        f[k] = query[k]
        filters.push(f)
    }

    return filters
}

export { updateHelper, generateFilter }