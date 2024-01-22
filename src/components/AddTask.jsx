import { useState } from "react";

export default function AddTask({ onAdd }) {
	const [text, setText] = useState("");
	const handleChangeText = (e) => {
		setText(e.target.value);
	};

	const handleAddTask = () => {
		if (text.length > 0) {
			setText("");
			onAdd(text);
		} else {
			alert("Please add something first");
		}
	};

	return (
		<>
			<input placeholder="Add task" value={text} onChange={handleChangeText} />
			<button onClick={handleAddTask}>Add</button>
		</>
	);
}

/*
export const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false },
	{ id: 2, text: "Lennon Wall pic", done: false },
];
*/
