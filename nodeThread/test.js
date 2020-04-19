'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Tests.
 */

const WT = require('./helpers.js')

const UNIT_TESTS = () => {
    WT.executeServiceUsingThread('./nodeThread/workerOne/worker_script_one.js', "Hello!")
    WT.executeServiceUsingThread('./nodeThread/workerTwo/worker_script_two.js', "TESTING")
    WT.executeServiceUsingThread('./nodeThread/workerThree/worker_script_three.js', "Test Three")
}

try {

    UNIT_TESTS()

} catch (ex) {
    console.error(`Exception encountered: ${ex}!`)
}