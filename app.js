
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(`URL : ${req.url}`);
    console.log(`METHOD : ${req.method}`);
    
    
});

server.listen(8080, () => {
    console.log('Server started on Port 8080 !');
});
