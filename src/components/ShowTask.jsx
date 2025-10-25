export default function ShowTask() {
	const tasks = [
		{ id: 1, name: "Task A", time: "2:09:01 AM 9/14/2030" },
		{ id: 2, name: "Task B", time: "2:09:01 AM 9/14/2030" },
		{ id: 3, name: "Task C", time: "2:09:01 AM 9/14/2030" },
		{ id: 4, name: "Task D", time: "2:09:01 AM 9/14/2030" },
		{ id: 5, name: "Task E", time: "2:09:01 AM 9/14/2030" },
		{ id: 6, name: "Task F", time: "2:09:01 AM 9/14/2030" },
		{ id: 7, name: "Task G", time: "2:09:01 AM 9/14/2030" },
	];

	return (
		<section className="showTask">
			<div className="head">
				<div>
					<span className="title">Todo</span>
					<span className="count">{tasks.length}</span>
				</div>
				<button className="clearAll">Clear All</button>
			</div>
			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							<p>
								<span className="name">{task.name}</span>
								<span className="time">{task.time}</span>
							</p>
							<div className="task-icon">
								<i className="fa fa-pencil-square"></i>
								<i className="fa fa-trash"></i>
							</div>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
