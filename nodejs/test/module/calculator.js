/*
 * @Author: Zhang Kai
 * @Date: 2019-03-21 00:46:49 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-21 00:47:35
 */

const convert = num => parseFloat(num);
const add = (a, b) => convert(a) + convert(b);
const subtract = (a, b) => convert(a) - convert(b);
const multiply = (a, b) => convert(a) * convert(b);
const divide = (a, b) => convert(a) / convert(b);

module.exports = { add, subtract, multiply, divide }