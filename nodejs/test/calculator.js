'use strict'

const cal = require('./module/calculator.js')

const args = process.argv.slice(2)

if (args.length !== 3) {
    throw new Error('parameter is not valid')
}

const [p1, op, p2] = args
let result = 0;

switch (op) {
    case '+':
        result = cal.add(p1, p2)
        break
    case '-':
        result = cal.subtract(p1, p2)
        break
    case '*':
        result = cal.multiply(p1, p2)
        break
    case '/':
        result = cal.divide(p1, p2)
        break
    default:
        throw new Error('不被支持的操作符' + op);
}

console.log(`${p1} ${op} ${p2} = ${result}`)