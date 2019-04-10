/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-28 17:17:10 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-28 17:43:32
 */

const net = require('net');
const [hostname, port] = ['127.0.0.1', 8080];

const socketConnect = (socket) => {
    const client = socket.address();
    console.log(client);

    socket.on('data', (chunk) => {
        console.log(chunk.toString());
    })
}

const server = net.createServer(socketConnect);

server.listen(port, hostname, (error) => {
    if (error) {
        console.log(error);
    }

    console.log(`listening to ${hostname}:${port}`);
})



