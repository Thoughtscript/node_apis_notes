'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Tests.
 */

const R = require('./restRequest.js')

const UNIT_TESTS = () => {
    R.asyncGet('http:', 'jsonplaceholder.typicode.com', 80, '/posts?id=12')
        .then(success => {
            success = success.replace('undefined', '')
            console.log(success)
        }, fail => {
            console.error(fail)
        })

    R.asyncGet('http:', 'jsonplaceholder.typicode.com', 80, '/posts?id=2')
        .then(success => {
            success = success.replace('undefined', '')
            console.log(success)
        }, fail => {
            console.error(fail)
        })

    R.asyncDelete('http:', 'jsonplaceholder.typicode.com', 80, '/posts/2')
        .then(success => {
            success = success.replace('undefined', '')
            console.log(success)
        }, fail => {
            console.error(fail)
        })

    R.asyncPost('http:', 'jsonplaceholder.typicode.com', 80, '/posts', null, {
        title: 'foo',
        body: 'bar',
        userId: 1
    })
        .then(success => {
            success = success.replace('undefined', '')
            console.log(success)
        }, fail => {
            console.error(fail)
        })

    R.asyncPut('http:', 'jsonplaceholder.typicode.com', 80, '/posts/4', null, {
        id: 4,
        title: 'foo',
        body: 'bar',
        userId: 4
    })
        .then(success => {
            success = success.replace('undefined', '')
            console.log(success)
        }, fail => {
            console.error(fail)
        })
}

try {

  UNIT_TESTS()

} catch (ex) {
    console.error(`Exception ${ex}!`)
}

module.exports = {
    HTTP_TEST: UNIT_TESTS
}