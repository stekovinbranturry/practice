/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-23 22:12:41 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-23 22:26:24
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const lyricPath = path.join(__dirname, './lyrics/王菲 - 爱不可及.lrc');
const readStream = fs.createReadStream(lyricPath);
const rl = readline.createInterface({ input: readStream });

const regex = /\[(\d{2})\:(\d{2})\.(\d{2})\](.+)/;
const startTime = new Date().getTime();

const readLyrics = (line, regex, startTime) => {
    const match = regex.exec(line);
    if (match) {
        const [m, s, f, lyric] = [parseFloat(match[1]), parseFloat(match[2]), parseFloat(match[3]), match[4]];
        const offset = new Date().getTime() - startTime;
        const execTime = m * 60 * 1000 + s * 1000 + f - offset;
        setTimeout(() => {
            console.log(lyric);
        }, execTime);
    } else {
        console.log(line);
    }
};

rl.on('line', (line) => {
    readLyrics(line, regex, startTime);
})
