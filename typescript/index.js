var str = 'hello world';
var greeting = function (firstName, lastName) {
    return lastName === undefined
        ? "hello " + firstName
        : "hello " + firstName + " " + lastName;
};
console.log(str, greeting('jj', 'redick'));
