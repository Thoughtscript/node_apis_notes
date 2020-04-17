'use strict'

/**
 * @author - Adam In Tae Gerard - https://www.linkedin.com/in/adamintaegerard/
 *
 * Core HTTP logic.
 */

const {createServer} = require('http')
const {createStaticFileServer} = require('./routes/staticFile')
const {createApi} = require('./routes/api')
const {parse} = require('url')

module.exports = {
    createHttpServer: port => {

        const s = createServer((req, res) => {
            const uri = parse(req.url).pathname
            createStaticFileServer(uri, req, res)
            createApi(uri, req, res)
        })

        console.info(`HTTP initialized!`)
        console.info(`REST API initialized!`)

        s.on('clientError', (err, sck) => {
            const e = `HTTP/1.1 400 Bad Request! ${err}`
            console.error(e)
            sck.end(e)
        })

        s.listen(port, () => console.info(`HTTP server started on port: ${s.address().port}`))
        return s
    }
}
