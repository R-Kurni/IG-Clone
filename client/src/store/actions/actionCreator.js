import FETCH_USERS_SUCCESS from "./actionType";
import FETCH_POSTS_SUCCESS from "./actionType";
import FETCH_COMMENTS_SUCCESS from "./actionType";
import axios from "axios";

export const fetchUsersSuccess = (data) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: data,
	};
};

export const fetchUsers = () => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				url: "http://localhost:3000/users",
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
		type: FETCH_POSTS_SUCCESS,
		payload: data,
	};
};

export const fetchPosts = () => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				url: "http://localhost:3000/posts",
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
		type: FETCH_COMMENTS_SUCCESS,
		payload: data,
	};
};

export const fetchComments = (userInput) => {
	return async (dispatch) => {
		try {
			const options = {
				method: "GET",
				url: "http://localhost:3000/comments",
			};
			if (typeof userInput !== "undefined") {
				options.params = {
					id: userInput.id,
				};
			}
			const { data } = await axios(options);
			console.log(data);
			dispatch(fetchCommentsSuccess(data));
		} catch (error) {
			console.log(error);
		}
	};
};
