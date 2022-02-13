import React, { useRef } from "react";
import "../components/styles.css";

interface Props {
	todo: string;
	setTodo: React.Dispatch<React.SetStateAction<string>>;
	handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	return (
		<form
			className="input"
			onSubmit={(e) => {
				handleAdd(e);
				inputRef.current?.blur();
			}}
		>
			<input
				ref={inputRef}
				type="input"
				placeholder="Enter a task"
				className="input__box"
				value={todo}
				onChange={handleChange}
			/>
			<button className="input_submit" type="submit">
				GO
			</button>
		</form>
	);
};

export default InputField;
