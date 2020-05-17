var http = require('http')
var fs = require('fs')
var path = require('path')
var html = fs.readFileSync(path.resolve('sources','index.html'))

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end(html)
}).listen(9123);