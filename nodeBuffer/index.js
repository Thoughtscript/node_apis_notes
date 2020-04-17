'use strict'

/**
 * @author - Adam In Tae Gerard
 *
 * String buffer examples.
 */

const testStringBuffer = str => {
     console.log(`\nTesting buffers for string: ${str}`)
     const buf = Buffer.from(str, 'utf8')
     console.log(buf)
     console.log(buf[0])
}

const testBufferFromString = (str, expected) => {
    console.log(`\nTesting buffers for string: ${str}`)
    console.log(`Expected: ${expected}`)
    const buf = Buffer.from(str, 'utf8')
    console.log(buf)
}

module.exports = {
    testStringBuffer: testStringBuffer,
    testBufferFromString: testBufferFromString
}