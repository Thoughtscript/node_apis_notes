'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * request is deprecated. This uses the native HTTP API to make server-side REST calls.
 */

const H = require('http')

const defaultOpts = (protocol, hostname, port, path, headers, method) => {

    let opts = {
        protocol: protocol || 'http:',
        hostname: hostname,
        path: path || '/',
        method: method,
        port: port || 80,
        headers: {...headers, 'Content-Type': 'application/json; charset=UTF-8'}
    }

    console.info(`OPTS prepped: ${JSON.stringify(opts)}\n`)
    return opts
}

const genericRequest = (OPTS, resolve, reject, data) => {
    const req = H.request(OPTS, res => {
        console.info(`STATUS: ${res.statusCode}\n`)
        console.info(`HEADERS: ${JSON.stringify(res.headers)}\n`)

        let responseData
        res.on('data', chunk => responseData += chunk )
        res.on('end', () => {
            console.info(`Request response complete!\n`)
            resolve(responseData)
        })
    })

    req.on('error', err => {
        console.error(`Problem with request: ${err.message}\n`)
        reject(err)
    })

    if (data !== null) req.write(JSON.stringify(data))
    else req.write('')
    req.end()
}

const asyncGet = (protocol, hostname, port, path, headers) => new Promise((resolve, reject) => {
    console.info(`GET request made to ${protocol}${hostname}:${port}${path}\n`)
    const OPTS = defaultOpts(protocol, hostname, port, path, headers, 'GET')
    genericRequest(OPTS, resolve, reject, null)
})

const asyncPut = (protocol, hostname, port, path, headers, data) => new Promise((resolve, reject) => {
    console.info(`PUT request made to ${protocol}${hostname}:${port}${path}\n`)
    const OPTS = defaultOpts(protocol, hostname, port, path, headers, 'PUT')
    genericRequest(OPTS, resolve, reject, data)
})

const asyncPost = (protocol, hostname, port, path, headers, data) => new Promise((resolve, reject) => {
    console.info(`POST request made to ${protocol}${hostname}:${port}${path}\n`)
    const OPTS = defaultOpts(protocol, hostname, port, path, headers, 'POST')
    genericRequest(OPTS, resolve, reject, data)
})

const asyncDelete = (protocol, hostname, port, path, headers) => new Promise((resolve, reject) => {
    console.info(`DELETE request made to ${protocol}${hostname}:${port}${path}\n`)
    const OPTS = defaultOpts(protocol, hostname, port, path, headers, 'DELETE')
    genericRequest(OPTS, resolve, reject, null)
})

module.exports = {
    asyncGet: asyncGet,
    asyncPut: asyncPut,
    asyncPost: asyncPost,
    asyncDelete: asyncDelete
}