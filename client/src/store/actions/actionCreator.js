import FETCH_USERS_SUCCESS from "./actionType";
import FETCH_POSTS_SUCCESS from "./actionType";
import FETCH_COMMENTS_SUCCESS from "./actionType";
import axios from "axios";

export const fetchUsersSuccess = (data) => {
	return {
		type: "users/fetchSuccess",
		payload: data,
	};
};

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				// url: "http://localhost:3000/users",
				url: "https://private-e1e01-igclone1.apiary-mock.com/users",
			};
			const { data } = await axios(options);
			console.log(data);
			dispatch(fetchUsersSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchPostsSuccess = (data) => {
	return {
		type: "posts/fetchSuccess",
		payload: data,
	};
};

export const fetchPosts = () => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				// url: "http://localhost:3000/posts",
				url: "https://private-e1e01-igclone1.apiary-mock.com/posts",
			};
			const { data } = await axios(options);
			console.log(data);
			dispatch(fetchPostsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

export const fetchCommentsSuccess = (data) => {
	return {
		type: "comments/fetchSuccess",
		payload: data,
	};
};

export const fetchComments = () => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				// url: "http://localhost:3000/comments",
				url: "https://private-e1e01-igclone1.apiary-mock.com/comments",
			};
			const { data } = await axios(options);
			console.log(data);
			dispatch(fetchCommentsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};

// export const fetchComments = (id) => {
// 	return async (dispatch) => {
// 		try {
// 			const options = {
// 				method: "GET",
// 				url: "http://localhost:3000/comments",
// 			};
// 			if (typeof id !== "undefined") {
// 				options.params = {
// 					id: id,
// 				};
// 			}
// 			const { data } = await axios(options);
// 			console.log(data);
// 			dispatch(fetchCommentsSuccess(data));
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// };
