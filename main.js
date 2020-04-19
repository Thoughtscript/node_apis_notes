'use strict'

/**
 * @author - Adam In Tae Gerard
 *
 * Main method.
 */

try {

    process.on('warning', warning => { console.error(`Warning encountered: ${warning}`) })
    process.on('unhandledRejection', rej => { console.error(`Unhandled Rejection override: ${rej}`) })
    process.on('uncaughtException', exception => { console.error(`Error encountered: ${exception}`) })
    process.on('exit', msg => { console.log(`Service shutting down: ${msg}`) })

    //require('./nodeBuffer/test')
    //require('./nodeHttp/test')
    //require('./nodeThread/test')
    //require('./nodeCluster')
    //require('./nodeCluster/test')

    console.log(`Take a look at main.js and uncomment the tests! (Running the tests individually is recommended.)\n`)

} catch (ex) {
    console.error(`Exception ${ex}!`)
    process.exit()
}