import FETCH_COMMENTS_SUCCESS from "../actions/actionType";

const initialState = {
	comments: [],
};

function commentReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_COMMENTS_SUCCESS:
			return {
				...state,
				comments: action.payload,
			};
		default:
			return state;
	}
}

export default commentReducer;
