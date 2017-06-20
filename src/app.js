const http = require('http');
const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer( (req, resp) => {
    resp.statusCode = 200;
    resp.setHeader('content-type', 'text/plain');
    resp.end('hello world');
});

server.listen(port, hostname, () => {
    console.log('server started on' + port);
});