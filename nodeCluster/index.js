'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Core cluster logic.
 */

const {createHttpServer} = require('./httpServer.js')

const CL = require('cluster'),
 C = require('../config').CLUSTER

const  createHttpCluster = () => {
    if (CL.isMaster) {
        let cpuCount = require('os').cpus().length
        cpuCount = C.WORKERS

        for (let i = 0; i < cpuCount; i++) {
            CL.fork()
        }

        CL.on('fork', worker => console.log(`Worker %d created: ${worker.id}`))
            .on('exit', worker => {
                console.error(`Worker %d died: ${worker.id}`)
                CL.fork()
         })

    } else createHttpServer(C.PORT)
}

module.exports = {
    createHttpCluster: createHttpCluster
}

try {

    createHttpCluster()

} catch (ex) {
    console.error(ex)
}
