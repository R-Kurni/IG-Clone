export default function Story({ post }) {
	return (
		<>
			<div className="stories-color">
				<div className="stories-white">
					<img
						src={post?.User?.profilePicture}
						alt="user"
						className="stories-profile"
					></img>
					<div className="stories-text">{post?.User?.username}</div>
				</div>
			</div>
		</>
	);
}
