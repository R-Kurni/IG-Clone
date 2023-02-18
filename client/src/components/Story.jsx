export default function Story({ user }) {
	return (
		<>
			<div className="stories-color">
				<div className="stories-white">
					<img
						src={user?.profilePicture}
						alt="user"
						className="stories-profile"
					></img>
					<div className="stories-text">{user?.username}</div>
				</div>
			</div>
		</>
	);
}
