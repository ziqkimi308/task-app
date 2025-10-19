import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header>
			<div className="logo">
				<img src={logo} alt="logo" />
				<span>Task-App</span>
			</div>
			<div className="theme-selector">
				<span className="light active-theme"></span>
				<span className="medium"></span>
				<span className="dark"></span>
				<span className="gradOne"></span>
				<span className="gradTwo"></span>
				<span className="gradThree"></span>
			</div>
		</header>
	);
}
