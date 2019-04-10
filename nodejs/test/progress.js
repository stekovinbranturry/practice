/*
 * @Author: Zhang Kai 
 * @Date: 2019-03-28 15:48:36 
 * @Last Modified by: Zhang Kai
 * @Last Modified time: 2019-03-28 16:00:43
 */

const ProgressBar = require('progress');

const bar = new ProgressBar(':bar', { total: 10 });

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        console.log('\ncomplete\n');
        clearInterval(timer);
    }
}, 100);
