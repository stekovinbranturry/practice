/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-26 11:08:36 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-26 12:03:48
 */

const http = require('http');

const [hostname, port] = ['127.0.0.1', 8080];

const server = http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})