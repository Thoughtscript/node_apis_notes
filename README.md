# node_apis_notes

[![](https://img.shields.io/badge/Node.js-13.8.0-yellowgreen.svg)](https://nodejs.org/en/) 

Node API refresh notes (in unit and integration testing format).

## Use

```Bash
$ npm i
$ npm run start
$ npm run stop-linux
$ npm run stop-win
```

> Take a look at [main.js](main.js) and uncomment the tests! (Running the tests individually is recommended.)

Tests are to be run from the [this] root directory. Slight modification of file paths may be required if you run tests from within the sub-directories!

## Individually

The cluster tests must be started in this order:

```Bash
$ npm run cluster
$ npm run cluster-test
```

These can be started in whatever order:

```Bash
$ npm run http-rest
$ npm run buffer-test
$ npm run thread-test
```

## Contents

1. NodeJS [Buffer class](https://nodejs.org/api/buffer.html#buffer_class_method_buffer_from_array)
1. NodeJS [Cluster](https://nodejs.org/docs/latest/api/cluster.html)
1. NodeJS [Worker Threads](https://nodejs.org/docs/latest/api/worker_threads.html)
1. NodeJS [HTTP Server-side REST](https://nodejs.org/api/http.html#http_http_request_options_callback)

## Resources

1. https://medium.com/the-andela-way/scaling-out-with-node-clusters-1dca4a39a2a
1. https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/
