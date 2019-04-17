/*
 * @Author: Zhang Kai 
 * @Date: 2019-04-15 21:42:35 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-17 15:13:46
 */

const net = require('net');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const chunkHandler = (chunk) => {
    // handle msg send to server
    // chunk format: {protocal:protocal,sender:sender,receiver:receiver,message:message}
    try {
        const signal = JSON.parse(chunk.toString().trim());
        const protocal = signal.protocal;
        switch (protocal) {
            case 'broadcast':
                console.log(`broadcast[${signal.sender}]:${signal.message}`);
                rl.prompt();
                break;
            default:
                socket.write('what?');
                break;
        }
    } catch (error) {
        socket.write('what?');
    }
};

rl.question('What is your name?\nName: ', (name) => {
    name = name.trim();
    if (!name) {
        throw new Error('No name!');
    }
    rl.setPrompt(name + '> ');

    const socket = net.connect({ port: 2080, host: '127.0.0.1' }, () => {
        console.log(`welcome ${name} come to chat room`);
        rl.prompt();
        socket.on('data', chunkHandler);
    })

    rl.on('line', (line) => {
        const sendMessage = {
            protocal: 'broadcast',
            sender: name,
            message: line.toString().trim()
        }
        socket.write(JSON.stringify(sendMessage));
        rl.prompt();
    }).on('close', () => {
        console.log(`${name} has left chat room`);
        process.exit(0);
    });
});
