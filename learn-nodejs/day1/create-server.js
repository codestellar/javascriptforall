const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    //res.writeHead('hi');
    // Nodejs directory name, global functions
    res.write(__dirname);
    res.write('<br/>');
    res.write(__filename);
    res.
    res.end();
});

server.listen(port, () => {
  console.log(`Server listening in port ${port}`);
});
