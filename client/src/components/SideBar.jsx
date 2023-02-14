import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faClapperboard,
	faHome,
	faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCompass,
	faHeart,
	faMessage,
	faSquarePlus,
} from "@fortawesome/free-regular-svg-icons";

export default function SideBar() {
	return (
		<>
			<Container className="sidebar" style={{ width: "250px" }}>
				<Link to="/">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
						alt="logo"
						className="logo"
					></img>
				</Link>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faHome} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Home</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faSearch} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Search</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faCompass} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Explore</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faClapperboard} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Reels</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faMessage} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Messages</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faHeart} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Notifications</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faSquarePlus} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Create</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<img
							src="https://cdn.concreteplayground.com/content/uploads/2013/09/Views-1-1920x1080.jpg"
							alt="profile-user"
							className="sidebar-profile"
						></img>
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">Profile</h5>
					</Link>
				</div>
				<div className="sidebar-btn">
					<Link to="/" className="nav-link">
						<FontAwesomeIcon icon={faBars} className="icons" />
					</Link>
					<Link to="/" className="nav-link">
						<h5 className="sidebar-text">More</h5>
					</Link>
				</div>
			</Container>
		</>
	);
}
