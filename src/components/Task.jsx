import { useState } from "react";

export default function Task({ task, onDeleteTask, onChangeTask }) {
	const [isEditing, setIsEditing] = useState(false);

	let taskContent;
	if (isEditing) {
		taskContent = (
			<>
				<input
					value={task.text}
					onChange={(e) => {
						// Expect a task object
						onChangeTask({
							...task,
							text: e.target.value,
						});
					}}
				/>
				<button onClick={() => setIsEditing(false)}>save</button>
			</>
		);
	} else {
		taskContent = (
			<>
				<span>{task.text}</span>
				<button onClick={() => setIsEditing(true)}>Edit</button>
			</>
		);
	}

	return (
		<li>
			<label>
				{/* Without any aditional property, the checkbox is basically uncontrolled */}
				<input
					type="checkbox"
					checked={task.done}
					onChange={(e) => {
						onChangeTask({
							...task,
							done: e.target.checked,
						});
					}}
				/>
				{taskContent}
				<button onClick={() => onDeleteTask(task.id)}>Delete</button>
			</label>
		</li>
	);
}

/*
export const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false }
	{ id: 2, text: "Lennon Wall pic", done: false },
];
*/
