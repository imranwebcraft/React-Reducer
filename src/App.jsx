import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";

export default function App() {
	const [tasks, setTasks] = useState(initialTasks);

	const getNextId = (data) => {
		const maxId = data.reduce((prev, current) =>
			prev && prev.id > current.id ? prev.id : current.id
		);
		return maxId + 1;
	};

	// Handlers
	const handleAddTask = (text) => {
		console.log(text);
		setTasks([...tasks, { id: getNextId(tasks), text: text, done: false }]);
	};

	const handleChangeTask = (task) => {
		/*

        nextTask =[	{ id: 0, text: "Visit Kafka Museum", done: true }, {milce tahole jeita paicish oita de}, {mile nai tahole ager tai thak} ]

        */

		const nextTasks = tasks.map((t) => {
			if (t.id === task.id) {
				return task;
			} else {
				return t;
			}
		});

		setTasks(nextTasks);
	};

	const handleDeleteTask = (taskId) => {
		setTasks(tasks.filter((t) => t.id !== taskId));
	};

	return (
		<>
			<h1>Prague itinerary</h1>
			<AddTask onAdd={handleAddTask} />
			<TaskList
				tasks={tasks}
				onChangeTask={handleChangeTask}
				onDeleteTask={handleDeleteTask}
			/>
		</>
	);
}

/*
export const initialTasks = [
	{ id: 0, text: "Visit Kafka Museum", done: true },
	{ id: 1, text: "Watch a puppet show", done: false }, // Murgi
	{ id: 2, text: "Lennon Wall pic", done: false },
];
*/
