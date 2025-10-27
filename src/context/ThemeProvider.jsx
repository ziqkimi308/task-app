import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
	// Retrieve theme from localStorage
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) || "light"
	);

	useEffect(() => {
		document.body.className = "";
		document.body.classList.add(theme);

		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
