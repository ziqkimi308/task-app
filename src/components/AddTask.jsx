import { useState } from "react";

export default function AddTask({ tasklist, setTasklist }) {
	const [taskName, setTaskName] = useState("");

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
		setTaskName("");
	};

	return (
		<section className="add-task">
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="task"
					placeholder="Add Task"
					maxLength="50"
					value={taskName}
					onChange={(event) => setTaskName(event.target.value)}
				/>
				<button type="submit">Add</button>
			</form>
		</section>
	);
}
