import { useImmerReducer } from "use-immer";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/tasks";
import taskReducer from "./reducers/taskReducer";
import getNextId from "./utils/getNextId";

export default function App() {
	const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

	// Handlers
	const handleAddTask = (text) => {
		dispatch({
			type: "added",
			text: text,
			id: getNextId(tasks),
		});
	};

	const handleChangeTask = (task) => {
		dispatch({
			type: "changed",
			task: task,
		});
	};

	const handleDeleteTask = (taskId) => {
		dispatch({
			type: "deleted",
			id: taskId,
		});
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
