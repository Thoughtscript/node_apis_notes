'use strict'

/**
 * @author - Adam In Tae Gerard
 *
 * Main method.
 */

const {createHttpCluster} = require('./nodeCluster')
const {CLUSTER_TESTS} = require('./nodeCluster/test')
const {HTTP_TEST} = require('./nodeHttp/test')

try {

    process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
    process.on('unhandledRejection', rej => { console.error(`Unhandled Rejection override: ${rej}`) })
    process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
    process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

    createHttpCluster()
    CLUSTER_TESTS()
    HTTP_TEST()

} catch (ex) {
    console.error(`Exception ${ex}!`)
    process.exit()
}