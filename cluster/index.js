'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Core cluster logic.
 */

const CL = require('cluster/cluster'),
    C = require('../../config')

module.exports = {
    createHttpCluster: () => {
        if (CL.isMaster) {
            let cpuCount = require('os').cpus().length
            if (C.CLUSTER != null) cpuCount = C.CLUSTER
            for (let i = 0; i < cpuCount; i++) {
                CL.fork()
            }

            CL.on('fork', worker => console.log(`Worker %d created: ${worker.id}`))
                .on('exit', worker => {
                    console.error(`Worker %d died: ${worker.id}`)
                    CL.fork()
                })

        } else require('../server/http').createHttpServer(C.PORT)
    }
}
