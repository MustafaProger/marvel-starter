import { Link, NavLink } from "react-router-dom";
import "./appHeader.scss";

const AppHeader = () => {
	return (
		<header className='app__header'>
			<h1 className='app__title'>
				<Link to='/'>
					<span>Marvel</span> information portal
				</Link>
			</h1>
			<nav className='app__menu'>
				<ul>
					<li>
						<NavLink
							to='/'
							className={({ isActive }) => (isActive ? "selected" : "")}>
							Characters
						</NavLink>
					</li>
					/
					<li>
						<NavLink
							to='/comics'
							className={({ isActive }) => (isActive ? "selected" : "")}>
							Comics
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default AppHeader;
