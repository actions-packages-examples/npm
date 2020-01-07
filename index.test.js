const assert = require('assert').strict
const ping = require('./index')

assert.strictEqual(ping(), 'ping')
