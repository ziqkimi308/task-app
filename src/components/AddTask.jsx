export default function AddTask() {
	return (
		<section className="addTask">
			<form>
				<input type="text" name="task" placeholder="Add Task" maxLength="50" />
				<button type="submit">Add</button>
			</form>
		</section>
	);
}
