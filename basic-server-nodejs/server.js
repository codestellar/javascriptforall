const http = require('http');

http.createServer((req, res) => {
    res.write('Hello');
    res.end();
}).listen(3000, '0.0.0.0', null, () => {
    console.log('http server is running');
})