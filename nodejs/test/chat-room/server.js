/*
 * @Author: Zhang Kai 
 * @Date: 2019-04-15 21:42:28 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-17 15:12:44
 */

const net = require('net');
const [hostname, port] = ['127.0.0.1', 2080];
let clients = [];

const broadcast = (signal) => {
    const sendMessage = {
        protocal: signal.protocal,
        sender: signal.sender,
        message: signal.message
    }
    clients.forEach(client => {
        client.write(JSON.stringify(sendMessage));
    });
}
const chunkHandler = (chunk) => {
    // handle msg client side send to server
    // chunk format: {protocal:protocal,sender:sender,receiver:receiver,message:message}
    try {
        const signal = JSON.parse(chunk.toString().trim());
        const protocal = signal.protocal;
        switch (protocal) {
            case 'broadcast':
                broadcast(signal);
                break;
            // case '':

            //     break;
            default:
                socket.write('what?');
                break;
        }
    } catch (error) {
        socket.write('what?');
    }
};

const server = net.createServer((socket) => {
    clients.push(socket);
    console.log(`Welcome ${socket.remoteAddress} to 2080 chatroom`);

    socket.on('data', chunkHandler).on('error', (error) => {
        clients.splice(clients.indexOf(socket), 1);
        console.log(`${socket.remoteAddress} has left the chat room`);
    });
});

server.listen(port, (error) => {
    if (error) {
        console.log('this port has been taken');
        return false;
    }
    console.log(`listening to ${hostname}:${port}`);
});
