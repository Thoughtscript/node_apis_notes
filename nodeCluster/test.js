'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Tests.
 */

const C = require('../config')
const CO = require('./routes/constants.js')

try {

    const view = `http://localhost:${C.CLUSTER.PORT}`
    const list = `http://localhost:${C.CLUSTER.PORT}/${CO.API_ROUTES[0]}`
    const one = `http://localhost:${C.CLUSTER.PORT}/${CO.API_ROUTES[2]}/?id=2`

} catch (ex) {
    console.error(`Exception ${ex}!`)
}