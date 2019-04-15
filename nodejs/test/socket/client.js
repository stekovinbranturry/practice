/*
 * @Author: Zhang Kai
 * @Date: 2019-04-10 14:02:34
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-15 15:50:16
 */

const net = require('net');
const client = net.createConnection({ port: 2080 }, () => {
    // 'connect' listener
    console.log('connected to server!');
    process.stdout.write('client> ');
    process.stdin.on('data', (chunk) => {
        client.write(chunk.toString().trim());
        // process.stdout.write('client> ');
    });

    client.on('data', (data) => {
        console.log(data.toString());
    });
});
