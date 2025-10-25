export default function ShowTask({ tasklist, setTasklist }) {
	// const tasks = [
	// 	{ id: 1, name: "Task A", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 2, name: "Task B", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 3, name: "Task C", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 4, name: "Task D", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 5, name: "Task E", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 6, name: "Task F", time: "2:09:01 AM 9/14/2030" },
	// 	{ id: 7, name: "Task G", time: "2:09:01 AM 9/14/2030" },
	// ];

	const handleDelete = (id) => {
		const updatedTaskList = tasklist.filter((task) => task.id !== id);
		setTasklist(updatedTaskList)
	};

	return (
		<section className="show-task">
			<div className="head">
				<div>
					<span className="title">Todo</span>
					<span className="count">{tasklist.length}</span>
				</div>
				<button
					className="clear-all"
					onClick={() => {
						if (window.confirm("Are you sure you want to clear all tasks?")) {
							setTasklist([]);
						}
					}}
				>
					Clear All
				</button>
			</div>
			<ul>
				{tasklist.map((task) => {
					return (
						<li key={task.id}>
							<p>
								<span className="name">{task.name}</span>
								<span className="time">{task.time}</span>
							</p>
							<div className="task-icon">
								<button className="pencil-btn">
									<img
										src="/icons/pencil.svg"
										className="pencil-icon"
										alt="edit"
									/>
								</button>
								<button
									className="trash-btn"
									onClick={() => handleDelete(task.id)}
								>
									<img
										src="/icons/garbage-bin.svg"
										className="trash-icon"
										alt="delete"
									/>
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
