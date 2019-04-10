/*
 * @Author: Zhang Kai
 * @Date: 2019-03-28 15:37:08
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-28 15:38:35
 */

const fs = require('fs');
const path = require('path');

const targetRead = path.join(__dirname, './github.css');
const targetWrite = path.join(__dirname, './github_bak.css');
const targetWrite2 = path.join(__dirname, './github_bak2.css');
const reader = fs.createReadStream(targetRead);
const writer = fs.createWriteStream(targetWrite);
const writer2 = fs.createWriteStream(targetWrite2);

reader.pipe(writer).pipe(writer2);