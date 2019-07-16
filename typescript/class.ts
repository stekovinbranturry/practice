interface UserInterface {
	name: string;
	age: number;
	register();
}

class User implements UserInterface {
	public name: string;
	public age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
		console.log('User: ' + name, 'Age: ' + age);
	}

	public register() {
		console.log(this.name + ' is registed');
	}
}

class Member extends User {
	id: number;
	constructor(id: number, name: string, age: number) {
		super(name, age);
		this.id = id;
	}
	register() {
		super.register();
	}
	checkIn() {
		console.log(this.name + "'s member ID is " + this.id);
	}
}

const mem = new Member(1234, 'John Doe', 30);
mem.checkIn();
mem.register();
