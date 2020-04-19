"use strict";

/**
 * Note: the WebWorker importScripts() cannot be used here.
 *
 * These are essentially NodeJS compliant scripts
 */

const { parentPort, workerData } = require('worker_threads');

//Listen to postMessage
parentPort.on("message", message => console.log(`${message} received from parent port!`))

//Listen and reply
parentPort.on("message", message => {
    console.log(`${message} received from parent port! (Again.)`)
    console.log(`Worker Two replying!`)
    parentPort.postMessage(`Worker Two: ${message} received!`)
})