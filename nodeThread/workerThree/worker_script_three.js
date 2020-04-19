"use strict";

/**
 * Note: the WebWorker importScripts() cannot be used here.
 *
 * These are essentially NodeJS compliant scripts
 */

const D = require('./script_worker_dependency.js')

const { workerData, parentPort, messagePort } = require('worker_threads')

console.log(`Worker Three console log dependency test one ${ D.testFunction('world') }`)
console.log(`Worker Three console log dependency test two ${ D.testFunction(workerData) }`)

const state = D.testFunction(workerData)

parentPort.postMessage(`Worker Three: relaying ${state}`)