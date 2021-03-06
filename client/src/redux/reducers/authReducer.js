import {
	CREATE_NEW_USER_REQUEST,
	CREATE_NEW_USER_SUCCES,
	CREATE_NEW_USER_FAILURE,
	USER_LOGIN_REQUEST,
	USER_LOGIN_FAILURE,
	USER_LOGIN_SUCCES,
	USER_LOGOUT
} from '../actions/Types';

const initialState = {
	loading: true,
	users: [],
	error: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_LOGIN_REQUEST:
			return {
				...state,
				loading: true
			};
		case USER_LOGIN_FAILURE:
			console.log('user failed to login');
			return {
				...state,
				error: 'Invalid mail or password '
			};
		case USER_LOGIN_SUCCES:
			console.log('login succes');
			return {
				...state,
				error: null
			};
		case USER_LOGOUT:
			return {
				...state,
				users: []
			};

		case CREATE_NEW_USER_REQUEST:
			return {
				...state,
				loading: true
			};
		case CREATE_NEW_USER_SUCCES:
			console.log('email added');

			return {
				...state,
				loading: false,
				users: action.payload,
				error: null
			};
		case CREATE_NEW_USER_FAILURE:
			return {
				...state,
				loading: false,
				users: [],
				error: 'Email already in use'
			};

		default:
			return state;
	}
};

export default authReducer;
