/*
 * @Author: Zhang Kai
 * @Date: 2019-04-10 14:02:38
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-15 15:49:45
 */

const net = require('net');
const [hostname, port] = ['127.0.0.1', 2080];

const server = net.createServer((socket) => {
    console.log(`${socket.remoteHostname}:${socket.remotePort} connected.`);
    socket.on('data', (chunk) => {
        console.log(chunk.toString());
        socket.write('server> what?');
    })
});

server.listen(port, (error) => {
    if (error) {
        console.log('this port has been taken');
        return false;
    }

    console.log(`listening to ${hostname}:${port}`);
})
