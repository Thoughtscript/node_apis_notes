'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Tests.
 */

const C = require('../config')
const CO = require('./routes/constants.js')
const HR = require('../nodeHttp/restRequest.js')

const UNIT_TESTS = () => {

    HR.asyncGet('http:', 'localhost', C.CLUSTER.PORT, `${CO.API_ROUTES[0]}`).then(success => {
        success = success.replace('undefined', '')
        console.log(success)
    }, fail => {
        console.error(fail)
    })

    HR.asyncGet('http:', 'localhost', C.CLUSTER.PORT, `${CO.API_ROUTES[2]}?id=2`).then(success => {
        success = success.replace('undefined', '')
        console.log(success)
    }, fail => {
        console.error(fail)
    })

    HR.asyncPut('http:', 'localhost', C.CLUSTER.PORT, `${CO.API_ROUTES[0]}`, null, {
        "contact": {
            "id": 0,
            "name": "Changed Man",
            "email": "not@the.same",
            "telegram_id": "@differentperson"
        }
    }).then(success => {
        success = success.replace('undefined', '')
        console.log(success)
    }, fail => {
        console.error(fail)
    })

    HR.asyncDelete('http:', 'localhost', C.CLUSTER.PORT, `${CO.API_ROUTES[0]}?id=1`).then(success => {
        success = success.replace('undefined', '')
        console.log(success)
    }, fail => {
        console.error(fail)
    })

    HR.asyncPost('http:', 'localhost', C.CLUSTER.PORT, `${CO.API_ROUTES[0]}`, null, {
        "contact": {
            "id": 15,
            "name": "New Man",
            "email": "a@new.man",
            "telegram_id": "@newman"
        }
    }).then(success => {
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
    CLUSTER_TESTS: UNIT_TESTS
}