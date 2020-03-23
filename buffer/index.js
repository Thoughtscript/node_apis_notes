'use strict'

const testStringBuffer = str => {
     const buf = Buffer.from(str, 'utf8')
     console.log(buf)
     console.log(buf[0])
     console.log(buf.toString())
}

try {
     testStringBuffer("hello world!")
     testStringBuffer("greetings celestial sphere")
} catch (e) {
     console.error(e)
}
