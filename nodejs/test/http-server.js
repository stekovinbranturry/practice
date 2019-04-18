/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-26 11:08:36 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-18 21:53:55
 */

const http = require('http');

const [hostname, port] = ['127.0.0.1', 8080];

const server = http.createServer((request, response) => {
    console.log(request.url);
    response.writeHead(200, { 'content-type': 'text/html' });
    response.write(`<h1>Hello World</h1>`)
    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})