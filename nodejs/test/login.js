const [ASK_USERNAME, ASK_PASSWORD] = ['please enter username: \n', 'please enter password: \n']
let [isUserName, usernameInput, passwordInput] = [true, '', '']
const account = {
    'admin': '123',
    'user': 'abc'
}

const printQuestion = () => process.stdout.write(isUserName ? ASK_USERNAME : ASK_PASSWORD)

printQuestion()

process.stdin.on('data', (input) => {
    input = input.toString().trim()
    // process.stdout.write(`username you inputed is: *${input}* \n`)
    if (isUserName) {
        if (Object.keys(account).includes(input)) {
            process.stdout.write('the username you input is existing \n')
            usernameInput = input
            isUserName = false
            printQuestion()
        } else {
            process.stdout.write('username is not existing \n')
            isUserName = true
            printQuestion()
        }
    } else {
        if (account[usernameInput] === input) {
            process.stdout.write('your password is correct \n')
            process.exit()
        } else {
            process.stdout.write('your password is not correct \n')
            printQuestion()
        }
    }
})