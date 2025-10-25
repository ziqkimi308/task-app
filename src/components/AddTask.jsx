export default function AddTask({ tasklist, setTasklist }) {
	const handleSubmit = (event) => {
		event.preventDefault();

		const date = new Date();
		// console.log("date: ", date, "\ntarget.value: ", event.target.task.value)

		const newTask = {
			id: date.getTime(),
			name: event.target.task.value,
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
