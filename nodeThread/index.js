'use strict'

const {Worker, parentPort} = require('worker_threads')

const worker = new Worker('worker_script_one.js')
worker.on('message', message => console.log(message));
worker.postMessage('I am sending a message');
