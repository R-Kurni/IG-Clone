export default function Story({ comment }) {
	return (
		<>
			<div className="posts-comment">
				<b>{comment?.User?.username}</b> {comment?.comment}
			</div>
		</>
	);
}
