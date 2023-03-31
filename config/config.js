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
