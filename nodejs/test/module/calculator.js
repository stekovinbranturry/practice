const convert = num => parseFloat(num);
const add = (a, b) => convert(a) + convert(b);
const subtract = (a, b) => convert(a) - convert(b);
const multiply = (a, b) => convert(a) * convert(b);
const divide = (a, b) => convert(a) / convert(b);

module.exports = { add, subtract, multiply, divide }