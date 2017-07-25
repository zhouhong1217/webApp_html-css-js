/**
 * Created by zh on 17-7-24.
 */
var http = require('http');

http.createServer(function(require,respones){

    respones.writeHead(200,{'Content-type':'text/plain'});

    respones.end('hello world\n');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');