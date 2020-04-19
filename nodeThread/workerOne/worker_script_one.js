"use strict";

/**
 * Note: the WebWorker importScripts() cannot be used here.
 *
 * These are essentially NodeJS compliant scripts
 */

const { workerData, parentPort } = require('worker_threads')

//console.log test

console.log('Test console log inside Worker One')
console.log(`Getting Worker One workerData: ${workerData}`)

const conversationMappings = {
    "Hello!": "Goodbye!"
}

const exampleDependencyFunction = text => conversationMappings[text]

parentPort.postMessage(`Worker one: ${workerData} - message response: ${exampleDependencyFunction(workerData)}!`)