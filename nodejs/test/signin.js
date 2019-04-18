/*
 * @Author: Zhang Kai 
 * @Date: 2019-04-18 16:45:02 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-04-18 23:06:10
 */

const http = require('http');
const querystring = require('querystring');

const [hostname, port] = ['127.0.0.1', 8080];

const signin = (request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <meta http-equiv="X-UA-Compatible" content="ie=edge">
                        <title>Sign in</title>
                    </head>
                    <body>
                        <form action="/post" method="POST">
                            <table>
                                <tr>
                                    <td>Username</td>
                                    <td><input type="text" name="username" id=""></td>
                                </tr>
                                <tr>
                                    <td>Password</td>
                                    <td><input type="password" name="password" id=""></td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td><input type="submit" value="Submit"></td>
                                </tr>
                            </table>
                        </form>
                    </body>
                    </html>`);
    response.end();
}
const post = (request, response) => {
    let str = '';
    let obj = {}
    request.on('data', (data) => {
        str += data;
    }).on('end', () => {
        obj = querystring.parse(str);
        if (obj.username === 'admin' && obj.password === 'admin') {
            // response.writeHead(200, { 'Content-Type': 'text/html' });
            // response.write(`<h1>Login successfully!</h1>`);
            console.log('success');
        } else {
            // response.writeHead(200, { 'Content-Type': 'text/html' });
            // response.write(`<h1>Login failed!</h1>`);
            console.log('failed');
        }
    });

    response.end('The form has been submitted.');
}

const server = http.createServer((request, response) => {
    const requestUrl = request.url;
    switch (requestUrl) {
        case '/signin':
            signin(request, response);
            break;
        case '/post':
            post(request, response);
        default:
            response.writeHead(404, {});
            response.end();
            break;
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})