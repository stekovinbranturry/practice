let str: string = 'hello world';
const greeting = function(firstName: string, lastName?: string): string {
	return lastName === undefined
		? `hello ${firstName}`
		: `hello ${firstName} ${lastName}`;
};
console.log(str, greeting('jj', 'redick'));
