import FETCH_USERS_SUCCESS from "../actions/actionType";

const initialState = {
	users: [],
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case "users/fetchSuccess":
			return {
				...state,
				users: action.payload,
			};
		default:
			return state;
	}
}

export default userReducer;
