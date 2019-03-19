const fs = require('fs')

console.time('timer')

fs.stat('./login.js', (err, stats) => {
    if (err) {
        console.error(err)
    }
    // console.log(stats)
})

console.timeEnd('timer')