setInterval(() => {
    console.log(1)
}, 1000)

let isSecondTime = false

process.on('SIGINT', () => {
    if (isSecondTime) {
        process.exit()
    } else {
        isSecondTime = true
        setTimeout(() => {
            isSecondTime = false
        }, 1000);
    }
})