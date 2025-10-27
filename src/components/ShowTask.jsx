import { useState } from "react";

export default function ShowTask({ tasklist, setTasklist }) {
	const [editingId, setEditingId] = useState(null);
	const [editValue, setEditValue] = useState("");
	let clickTimer = null;

	const handleClick = (task) => {
		clickTimer = setTimeout(() => {
			setEditingId(task.id);
			setEditValue(task.name);
		}, 0);
	};

	const handleDoubleClick = (task) => {
		clearTimeout(clickTimer);
		if (window.confirm(`Delete "${task.name}"?`)) handleDelete(task.id);
	};

	const handleEdit = (id, newName) => {
		if (!newName.trim()) return;
		const date = new Date();
		const updatedTaskList = tasklist.map((task) =>
			task.id === id
				? {
						...task,
						name: newName,
						time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
				  }
				: task
		);
		setTasklist(updatedTaskList);
		setEditingId(null);
	};

	const handleDelete = (id) => {
		const updatedTaskList = tasklist.filter((task) => task.id !== id);
		setTasklist(updatedTaskList);
	};

	return (
		<section className="show-task">
			<div className="head">
				<div>
					<span className="title">Todo</span>
					<span className="count">{tasklist.length}</span>
					<span className="instruction">Click to Edit and DoubleClick to Delete</span>
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
						<li
							key={task.id}
							onClick={() => handleClick(task)}
							// Double click
							onDoubleClick={() => handleDoubleClick(task)}
						>
							{editingId === task.id ? (
								<input
									id="input-edit"
									type="text"
									value={editValue}
									onChange={(e) => setEditValue(e.target.value)}
									// onChange - the value is set to EditValue which then if Blur or KeyDown by Enter, EditValue will replace old task
									onBlur={() => handleEdit(task.id, editValue)}
									onKeyDown={(e) => {
										if (e.key === "Enter") handleEdit(task.id, editValue);
									}}
									autoFocus
								/>
							) : (
								<div className="task-container">
									<span className="name">{task.name}</span>
									<span className="time">{task.time}</span>
								</div>
							)}
						</li>
					);
				})}
			</ul>
		</section>
	);
}
