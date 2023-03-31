const NodeCache = require('node-cache')

const config = {
    prefix: '/',
    openaikey: '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',
    cache: new NodeCache({
        checkperiod: 10000,
        deleteOnExpire: true
    }),
    ratelimit: new Map(),
    commands: new Map(),
    aliases: new Map()
}

module.exports = config