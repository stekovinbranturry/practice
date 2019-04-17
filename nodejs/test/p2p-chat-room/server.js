/*
 * @Author: Zhang Kai 
 * @Date: 2019-04-17 15:16:51 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-17 16:00:12
 */

const net = require('net');
const [hostname, port] = ['127.0.0.1', 2080];
let clients = {};

const server = net.createServer((socket) => {
    const signin = (signal) => {
        clients[signal.username] = socket;
        console.log(`Welcome ${signal.username} to 2080 chatroom`);
    }
    const broadcast = (signal) => {
        const sendMessage = {
            protocal: signal.protocal,
            sender: signal.sender,
            message: signal.message
        }

        for (const client in clients) {
            if (clients.hasOwnProperty(client) && (client !== signal.sender)) {
                const element = clients[client];
                element.write(JSON.stringify(sendMessage));
            }
        }
    }
    const p2p = (signal) => {
        const sendMessage = {
            protocal: signal.protocal,
            sender: signal.sender,
            message: signal.message
        }
        clients[signal.receiver].write(JSON.stringify(sendMessage));
    }
    const chunkHandler = (chunk) => {
        // handle msg client side send to server
        // chunk format: {protocal:protocal,sender:sender,receiver:receiver,message:message}
        try {
            const signal = JSON.parse(chunk.toString().trim());
            const protocal = signal.protocal;
            switch (protocal) {
                case 'signin':
                    signin(signal);
                    break;
                case 'broadcast':
                    broadcast(signal);
                    break;
                case 'p2p':
                    p2p(signal);
                    break;
                default:
                    socket.write('what?');
                    break;
            }
        } catch (error) {
            socket.write('what?');
        }
    };
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
