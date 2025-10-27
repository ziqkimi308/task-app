import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
	const { setTheme } = useContext(ThemeContext);

	return (
		<header>
			<div className="logo">
				<img src="/logo/logo2.png" alt="logo" />
				<span>Task-App</span>
			</div>
			<div className="theme-selector">
				<span
					className="light active-theme"
					onClick={() => setTheme("light")}
				></span>
				<span className="medium" onClick={() => setTheme("medium")}></span>
				<span className="dark" onClick={() => setTheme("dark")}></span>
				<span className="gradOne" onClick={() => setTheme("gradOne")}></span>
				<span className="gradTwo" onClick={() => setTheme("gradTwo")}></span>
				<span
					className="gradThree"
					onClick={() => setTheme("gradThree")}
				></span>
			</div>
		</header>
	);
}
