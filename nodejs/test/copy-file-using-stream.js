/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-28 14:23:59 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-28 15:37:10
 */

const fs = require('fs');
const path = require('path');

const targetRead = path.join(__dirname, './github.css');
const targetWrite = path.join(__dirname, './github_bak.css');
const reader = fs.createReadStream(targetRead);
const writer = fs.createWriteStream(targetWrite);


fs.stat(targetRead, (error, data) => {
    if (data) {
        let totalProcess = 0;
        reader.on('data', (chunk) => {
            writer.write(chunk, () => {
                console.log((totalProcess += chunk.length) / data.size * 100 + '%');

            })
            // console.log((totalProcess += chunk.length) / data.size * 100 + '%');
        })
    }
})
