import { CREATE_NEW_USER_REQUEST, CREATE_NEW_USER_SUCCES, CREATE_NEW_USER_FAILURE } from '../actions/Types';

const initialState = {
	loading: false,
	users: [],
	error: ''
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_NEW_USER_REQUEST:
			return {
				...state,
				loading: true
			};
		case CREATE_NEW_USER_SUCCES:
			return {
				...state,
				loading: false,
				users: action.payload,
				error: ''
			};
		case CREATE_NEW_USER_FAILURE:
			return {
				...state,
				loading: false,
				users: [],
				error: action.payload
			};

		default:
			return state;
	}
};

export default authReducer;
