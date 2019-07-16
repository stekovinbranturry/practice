interface Todo {
	title: string;
	todo: string;
}

function todo(todo: Todo) {
	console.log(todo.title + ': ' + todo.todo);
}

const myTodo = {
	title: 'trash',
	todo: 'Throw the trash'
};

todo(myTodo);
