import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faEllipsis,
	faHeart as faHeart1,
	faBookmark as faBookmark1,
} from "@fortawesome/free-solid-svg-icons";
import {
	faBookmark,
	faComment,
	faHeart,
	faPaperPlane,
} from "@fortawesome/free-regular-svg-icons";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchComments } from "../store/actions/actionCreator.js";
import Comment from "../components/Comment.jsx";
import axios from "axios";

export default function Post({ post }) {
	const dispatch = useDispatch();
	const { comments } = useSelector((state) => {
		return state.comments;
	});
	const [isLiked, setIsLiked] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const counter = post.like;
	const [likeCounter, setLikeCounter] = useState(counter);
	const id = post.id;
	useEffect(() => {
		dispatch(fetchComments());
	}, []);
	// useEffect(() => {
	// 	dispatch(fetchComments(id));
	// }, []);
	// async function fetchComments() {
	// 	try {
	// 		const options = {
	// 			method: "GET",
	// 			url: "http://localhost:3000/comments",
	// 		};
	// 		if (typeof id !== "undefined") {
	// 			options.params = {
	// 				id: id,
	// 			};
	// 		}
	// 		const { data } = await axios(options);
	// 		console.log(data);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }
	// useEffect(() => {
	// 	fetchComments();
	// }, []);
	return (
		<>
			<Container style={{ width: "400px" }}>
				<Row>
					<Col lg={2}>
						<img
							src={post?.User?.profilePicture}
							alt="user"
							className="posts-profile"
						></img>
					</Col>
					<Col>
						<div className="posts-text">{post?.User?.username}</div>
					</Col>
					<Col lg={2}>
						<FontAwesomeIcon icon={faEllipsis} className="posts-more" />
					</Col>
				</Row>
				<Row>
					<img src={post.image} alt="user" className="posts-media"></img>
				</Row>
				<Row>
					<Col lg={10}>
						{!isLiked ? (
							<FontAwesomeIcon
								icon={faHeart}
								className="posts-icon"
								onClick={() => {
									setLikeCounter(likeCounter + 1);
									setIsLiked(true);
								}}
							/>
						) : (
							<FontAwesomeIcon
								icon={faHeart1}
								style={{ color: "red" }}
								className="posts-icon"
								onClick={() => {
									setLikeCounter(likeCounter - 1);
									setIsLiked(false);
								}}
							/>
						)}
						<FontAwesomeIcon icon={faComment} className="posts-icon" />
						<FontAwesomeIcon icon={faPaperPlane} className="posts-icon" />
					</Col>
					<Col lg={2}>
						{!isSaved ? (
							<FontAwesomeIcon
								icon={faBookmark}
								className="posts-save"
								onClick={() => {
									setIsSaved(true);
								}}
							/>
						) : (
							<FontAwesomeIcon
								icon={faBookmark1}
								className="posts-save"
								onClick={() => {
									setIsSaved(false);
								}}
							/>
						)}
					</Col>
				</Row>
				<Row>
					<div className="posts-like">{likeCounter} likes</div>
				</Row>
				<Row>
					<div className="posts-caption">
						<b>{post?.User?.username}</b> {post?.caption}
					</div>
				</Row>
				<Row>
					{comments?.map((comment) => {
						return <Comment comment={comment} key={comment.id} />;
					})}
				</Row>
				<Row>
					<input
						class="border-0"
						size="sm"
						type="text"
						placeholder="Add a comment..."
						className="posts-input-comment"
					/>
				</Row>
				<hr></hr>
			</Container>
		</>
	);
}
