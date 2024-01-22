const taskReducer = (draft, action) => {
	switch (action.type) {
		case "added": {
			draft.push({ id: action.id, text: action.text, done: false });
			break;
		}
		case "changed": {
			const index = draft.findIndex((t) => t.id === action.task.id);
			draft[index] = action.task;
			break;
		}

		case "deleted": {
			return draft.filter((t) => t.id !== action.id);
		}

		default: {
			throw new Error(`No action matched with ${action.type}`);
		}
	}
};

export default taskReducer;

/*
action mean what happened object


{
type: "added",
text: text,
id: getNextId(tasks),
}

{
type: "changed",
task: task,
}

{
type: "deleted",
id: taskId,
}

*/
