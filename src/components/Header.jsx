import { useContext } from "react";
import logo2 from "../assets/logo2.png";
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
	const { setTheme } = useContext(ThemeContext);

	return (
		<header>
			<div className="logo">
				<img src={logo2} alt="logo" />
				<span>Task-App</span>
			</div>
			<div className="theme-selector">
				<span className="light active-theme" onClick={()=>setTheme("light")}></span>
				<span className="medium" onClick={()=>setTheme("medium")}></span>
				<span className="dark" onClick={()=>{console.log("clicked dark")
					setTheme("dark")}}></span>
				<span className="gradOne" onClick={()=>setTheme("gradOne")}></span>
				<span className="gradTwo" onClick={()=>setTheme("gradTwo")}></span>
				<span className="gradThree" onClick={()=>setTheme("gradThree")}></span>
			</div>
		</header>
	);
}
