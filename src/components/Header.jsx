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
				<span className="gOne"></span>
				<span className="gTwo"></span>
				<span className="gThree"></span>
			</div>
		</header>
	);
}
