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
