import { Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Story from "../components/Story.jsx";
import Post from "../components/Post.jsx";
import { fetchUsers, fetchPosts } from "../store/actions/actionCreator.js";

export default function HomePage() {
	const dispatch = useDispatch();
	const { users } = useSelector((state) => {
		return state.users;
	});
	const { posts } = useSelector((state) => {
		return state.posts;
	});
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);
	useEffect(() => {
		dispatch(fetchPosts());
	}, []);
	return (
		<>
			<Container fluid>
				<Row className="home-page">
					<Col lg={8}>
						<Row>
							<div className="stories">
								{users.map((user) => {
									return <Story user={user} key={user.id} />;
								})}
							</div>
						</Row>
						<Row>
							<div className="posts">
								{posts.map((post) => {
									return <Post post={post} key={post.id} />;
								})}
							</div>
						</Row>
					</Col>
					<Col>
						<Row>
							<Col lg={3}>
								<img
									src="https://cdn.concreteplayground.com/content/uploads/2013/09/Views-1-1920x1080.jpg"
									alt="user"
									className="stories-profile"
								></img>
							</Col>
							<Col lg={6}>
								<Row>
									<div className="profile-username">robby</div>
								</Row>
								<Row>
									<div className="profile-text">Robby Kurniawan</div>
								</Row>
							</Col>
							<Col lg={3}>
								<Row>
									<div className="profile-blue">Switch</div>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col lg={9}>
								<div className="profile-grey">Suggestions for you</div>
							</Col>
							<Col lg={3}>
								<div className="profile-dark">See All</div>
							</Col>
						</Row>
						<Row className="suggestions">
							<Row className="suggestions">
								<Col lg={2}>
									<img
										src="https://sm.askmen.com/t/askmen_in/article/f/facebook-p/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.jpg"
										alt="user"
										className="suggestions-profile"
									></img>
								</Col>
								<Col>
									<Row>
										<div className="suggestions-username">skyler.cy</div>
									</Row>
									<Row>
										<div className="suggestions-text">Followed by michelle</div>
									</Row>
								</Col>
								<Col lg={3}>
									<Row>
										<div className="suggestions-blue">Follow</div>
									</Row>
								</Col>
							</Row>
							<Row className="suggestions">
								<Col lg={2}>
									<img
										src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
										alt="user"
										className="suggestions-profile"
									></img>
								</Col>
								<Col>
									<Row>
										<div className="suggestions-username">beast_xzx</div>
									</Row>
									<Row>
										<div className="suggestions-text">Followed by jonathan</div>
									</Row>
								</Col>
								<Col lg={3}>
									<Row>
										<div className="suggestions-blue">Follow</div>
									</Row>
								</Col>
							</Row>
							<Row className="suggestions">
								<Col lg={2}>
									<img
										src="https://s-i.huffpost.com/gen/2243136/images/o-ADVENTURE-TRAVEL-facebook.jpg"
										alt="user"
										className="suggestions-profile"
									></img>
								</Col>
								<Col>
									<Row>
										<div className="suggestions-username">
											lets.go.on.adventures
										</div>
									</Row>
									<Row>
										<div className="suggestions-text">Followed by jonathan</div>
									</Row>
								</Col>
								<Col lg={3}>
									<Row>
										<div className="suggestions-blue">Follow</div>
									</Row>
								</Col>
							</Row>
							<Row className="suggestions">
								<Col lg={2}>
									<img
										src="https://www.wellnessleadershipacademy.com/wp-content/uploads/2019/11/female2-profile.jpg"
										alt="user"
										className="suggestions-profile"
									></img>
								</Col>
								<Col>
									<Row>
										<div className="suggestions-username">jenn</div>
									</Row>
									<Row>
										<div className="suggestions-text">
											Followed by jake + 2 more
										</div>
									</Row>
								</Col>
								<Col lg={3}>
									<Row>
										<div className="suggestions-blue">Follow</div>
									</Row>
								</Col>
							</Row>
							<Row className="suggestions">
								<Col lg={2}>
									<img
										src="https://tse2.mm.bing.net/th?id=OIP.i4psgLQreSbV1l08iZnsjQHaEK&pid=Api&P=0"
										alt="user"
										className="suggestions-profile"
									></img>
								</Col>
								<Col>
									<Row>
										<div className="suggestions-username">amaya</div>
									</Row>
									<Row>
										<div className="suggestions-text">
											Followed by jake + 2 more
										</div>
									</Row>
								</Col>
								<Col lg={3}>
									<Row>
										<div className="suggestions-blue">Follow</div>
									</Row>
								</Col>
							</Row>
						</Row>
						<br></br>
						<Row>
							<div className="terms-text">
								About · Help · Press · API · Jobs · Privacy · Terms · Locations
								· Language
							</div>
						</Row>
						<br></br>
						<Row>
							<div className="terms-text">© 2023 INSTAGRAM FROM META</div>
						</Row>
					</Col>
					<Col lg={1}></Col>
				</Row>
			</Container>
		</>
	);
}
