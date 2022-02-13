import React, { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App = () => {
	const [todo, setTodo] = useState<string>("");
	const [todos, setTodos] = useState<Todo[]>([]);

	const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newTodo: Todo = {
			id: Date.now(),
			isDone: false,
			todo,
		};

		if (todo) {
			setTodos([...todos, newTodo]);
			setTodo("");
		}
	};

	useEffect(() => {
		console.log(todos);
	}, [todos]);

	return (
		<div className="App">
			<span className="heading">Taskify</span>
			<InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
