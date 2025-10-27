export default function AddTask({ tasklist, setTasklist }) {
	const handleSubmit = (event) => {
		event.preventDefault();

		const taskValue = event.target.task.value.trim();
		if (!taskValue) {
			alert("Task cannot be empty!");
			return
		}

		const date = new Date();
		const newTask = {
			id: date.getTime(),
			name: taskValue,
			time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
		};

		setTasklist([...tasklist, newTask]);
		event.target.task.value = "";
	};

	return (
		<section className="add-task">
			<form onSubmit={handleSubmit}>
				<input type="text" name="task" placeholder="Add Task" maxLength="50" />
				<button type="submit">Add</button>
			</form>
		</section>
	);
}
