'use strict'

/**
 * @author - Adam In Tae Gerard
 *
 * Main method.
 */

const {testStringBuffer, testBufferFromString} = require('./index.js')

const UNIT_TESTS = () => {

    testStringBuffer("hello world!")
    testBufferFromString("hello world!", "<Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 21>")
    testStringBuffer("greetings celestial sphere")
    testBufferFromString("greetings celestial sphere", "<Buffer 67 72 65 65 74 69 6e 67 73 20 63 65 6c 65 73 74 69 61 6c 20 73 70 68 65 72 65>")
}

try {

    UNIT_TESTS()

} catch (e) {
    console.error(e)
}