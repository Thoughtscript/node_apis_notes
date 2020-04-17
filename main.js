'use strict'

/**
 * @author - Adam In Tae Gerard
 *
 * Main method.
 */

const {createHttpCluster} = require('./nodeCluster')

try {

    process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
    process.on('unhandledRejection', rej => { console.error(`Unhandled Rejection override: ${rej}`) })
    process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
    process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

    createHttpCluster()

} catch (ex) {
    console.error(`Exception ${ex}!`)
    process.exit()
}