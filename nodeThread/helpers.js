'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Worker Thread helpers.
 *
 * https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/
 */

const {Worker } = require('worker_threads')

const createWorker = (filename, paramsToExecute) => new Promise((resolve, reject) => {

    //Constructor
    //Will pass paramsToExecute to the method executed in filename
    //Must have workerData as attribute
    const W = new Worker(filename, {workerData: paramsToExecute })

    //Listeners in parent thread
    W.on('message', message => {
        console.log(`Worker message received: ${message}!`)
        resolve(message)
    })

    W.on('error', error => {
        console.error(`Worker error encountered: ${error}!`)
        reject(error);
    })

    W.on('exit', exitCode => {
        if (exitCode !== 0) {
            console.error(`Worker stopped with exit code ${exitCode}`)
            reject(exitCode)
        } else {
            console.log(`Worker stopped with exit code ${exitCode}`)
            resolve(exitCode)
        }
    })

    //Send message to worker script
    W.postMessage('I am initialized...')

})

//Wrap this with a Thread Pool and/or Thread count to prevent excessive resourcing
const executeServiceUsingThread = (filename, paramsToExecute) => new Promise((resolve, reject) => {
    createWorker(filename, paramsToExecute).then(success => {
        console.log(`Service completed: ${success}!`)
    }, failure => {
        console.error(`Service completed: ${failure}!`)
    })
})

module.exports = {
    executeServiceUsingThread: executeServiceUsingThread
}