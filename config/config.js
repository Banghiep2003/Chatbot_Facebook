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
