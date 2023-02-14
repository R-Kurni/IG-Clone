import FETCH_POSTS_SUCCESS from "../actions/actionType";

const initialState = {
	posts: [],
};

function postReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload,
			};
		default:
			return state;
	}
}

export default postReducer;
